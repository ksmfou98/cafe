import Post from "../models/post";
import mongoose from "mongoose";

const { ObjectId } = mongoose.Types;

// postId 검증 미들웨어
export const getPostById = async (req, res, next) => {
  const { id } = req.params;
  if (!ObjectId.isValid(id)) {
    return res.status(400).json({ success: false });
  }
  try {
    const post = await Post.findById(id);
    // 포스트가 존재하지 않을 때
    if (!post) {
      res.status(404).json({
        success: false,
      });
    }
    res.locals.post = post;
    return next();
  } catch (e) {
    res.status(500).json({ e });
  }
};

// id로 찾은 포스트가 로그인중인 사용자가 작성한 포스트인지 확인하는 미들웨어
export const checkOwnPost = (req, res, next) => {
  const { user, post } = res.locals;
  if (post.user._id.toString() !== user._id) {
    // MongoDB에서 조회한 데이터의 id값을 문자열과 비교할 때는 반드시 .toString()을 해주어야 한다.
    return res.status(403).json({ success: false });
  }
  return next();
};

// 글 작성
export const write = async (req, res) => {
  const { title, body, tags } = req.body;

  const post = new Post({
    title,
    body,
    tags,
    user: res.locals.user,
  });

  try {
    const posts = await post.save();
    res.status(200).json({
      success: true,
      posts,
    });
  } catch (e) {
    res.status(500).send(e);
  }
};

// 전체 글 조회
export const list = async (req, res) => {
  // query는 문자열이기 때문에 숫자로 변환해 주어야 한다.
  // 값이 주어지지 않았다면 1을 기본으로 사용한다.
  const page = parseInt(req.query.page || "1", 10);

  if (page < 1) {
    return res.status(400).json({ success: false });
  }

  const { tag, username } = req.query;
  // tag, username 값이 유효하면 객체 안에 넣고, 그렇지 않으면 넣지 않음
  const query = {
    ...(username ? { "user.username": username } : {}),
    ...(tag ? { tags: tag } : {}),
  };

  try {
    const posts = await Post.find(query) // query가 있을경우 query를 찾고 없을경우 {} 전체 다 찾으란 소리
      .sort({ _id: -1 })
      .limit(10)
      .skip((page - 1) * 10)
      .lean()
      .exec();

    const postCount = await Post.countDocuments(query).exec();
    res.set("Last-Page", Math.ceil(postCount / 10));

    res.status(200).json({
      success: true,
      posts: posts.map((post) => ({
        ...post,
        body:
          post.body.length < 200 ? post.body : `${post.body.slice(0, 200)}...`,
      })),
    });
  } catch (e) {
    res.status(500).send(e);
  }
};

// 특정 글 조회
export const read = async (req, res) => {
  res.status(200).json({ success: true, post: res.locals.post });
};

// 특정 글 삭제
export const remove = async (req, res) => {
  const id = req.params.id;
  try {
    await Post.findByIdAndRemove(id).exec();
    res.status(204).json({ success: true }); // 204 : 성공하기는 했지만 응답할 데이터는 없음
  } catch (e) {
    res.status(500).send(e);
  }
};

// 특정 글 업데이트
export const update = async (req, res) => {
  const id = req.params.id;
  try {
    const post = await Post.findByIdAndUpdate(id, req.body, {
      new: true,
    }).exec(); // new 값을 설정하면 업데이트 된 데이터를 반환한다. false일 경우 업데이트 되기 전 데이터 반환
    if (!post) {
      return res.status(404).json({ success: false });
    }
    res.status(200).json({
      success: true,
      post,
    });
  } catch (e) {
    res.status(500).send(e);
  }
};
