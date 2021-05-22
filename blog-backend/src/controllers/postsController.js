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

export const remove = (req, res) => {};

export const update = (req, res) => {};
