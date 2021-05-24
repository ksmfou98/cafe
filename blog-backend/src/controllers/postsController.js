import Post from "../models/post";

// 글 작성
export const write = async (req, res) => {
  const post = new Post(req.body);

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
  try {
    const posts = await Post.find().exec();
    res.status(200).json({
      success: true,
      posts,
    });
  } catch (e) {
    res.status(500).send(e);
  }
};

// 특정 글 조회
export const read = async (req, res) => {
  const id = req.params.id;
  try {
    const post = await Post.findById(id).exec();
    if (!post) {
      res.status(404).json({
        success: false,
      });
    }
    res.status(200).json({
      success: true,
      post,
    });
  } catch (e) {
    res.status(500).send(e);
  }
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
