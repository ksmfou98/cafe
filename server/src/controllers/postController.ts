import { Request, Response } from "express";
import Post from "../models/post";

// 게시물 생성
export const createPost = async (req: Request, res: Response) => {
  const { title, content, boardId } = req.body;
  const { cafeId } = req.params;

  try {
    const post = new Post({
      title,
      content,
      board: boardId,
      cafe: cafeId,
      writer: res.locals.user._id,
    });

    await post.save();

    return res.status(201).json({
      success: true,
      post,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      e,
    });
  }
};

// 게시물 조회
export const readPostList = async (req: Request, res: Response) => {
  const { cafeId, boardId } = req.params;
  try {
    if (boardId === "all") {
      const posts = await Post.find({
        cafe: cafeId,
      }).populate("writer");

      return res.status(200).json({
        success: true,
        posts: [...posts.reverse()],
      });
    }

    const posts = await Post.find({
      cafe: cafeId,
      board: boardId,
    }).populate("writer");

    return res.status(200).json({
      success: true,
      posts: [...posts.reverse()],
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      e,
    });
  }
};

// 게시물 상세보기
export const readPostDetail = async (req: Request, res: Response) => {
  const { postId } = req.params;

  try {
    const post = await Post.findById({ _id: postId }).populate("board writer");

    if (!post) {
      return res.status(400).json({
        success: false,
        message: "해당 게시물이 존재하지 않습니다.",
      });
    }

    return res.status(200).json({
      success: true,
      post,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      e,
    });
  }
};

// 게시물 수정
export const updatePost = async (req: Request, res: Response) => {
  const { postId, title, content, boardId } = req.body;
  const userId = res.locals.user._id;

  try {
    let post = await Post.findById({ _id: postId });

    if (!post) {
      return res.status(400).json({
        success: false,
        message: "해당 게시물이 존재하지 않습니다.",
      });
    }

    if (post.writer.toString() !== userId) {
      return res.status(400).json({
        success: false,
        message: "게시물 작성자가 아닙니다.",
      });
    }

    post = await Post.findByIdAndUpdate(
      { _id: postId },
      { title, content, board: boardId },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      post,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      e,
    });
  }
};

// 게시물 삭제
export const deletePost = async (req: Request, res: Response) => {
  const userId = res.locals.user._id;
  const { postId } = req.params;
  try {
    let post = await Post.findById({ _id: postId });

    if (!post) {
      return res.status(400).json({
        success: false,
        message: "해당 게시물이 존재하지 않습니다.",
      });
    }

    if (post.writer.toString() !== userId) {
      return res.status(400).json({
        success: false,
        message: "게시물 작성자가 아닙니다.",
      });
    }

    post = await Post.findByIdAndDelete({ _id: postId });

    return res.status(200).json({
      success: true,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      e,
    });
  }
};

// 게시물 좋아요
export const likePost = async (req: Request, res: Response) => {
  const { postId } = req.body;
  const userId = res.locals.user._id;

  try {
    let post = await Post.findById({ _id: postId });
    if (!post) {
      return res.status(400).json({
        success: false,
        message: "해당 게시물을 찾을 수 없습니다",
      });
    }

    // 싫어요를 누른 상태이면 그냥 return
    const disliked = post.like_users.some(
      (user) => user.user.toString() === userId && user.like === "bad"
    );
    if (disliked) {
      return res.status(409).json({
        success: false,
        message: "현재 싫어요를 누른 상태입니다.",
      });
    }

    // 이미 좋아요를 누른 사람이면 좋아요 누른걸 취소
    const liked = post.like_users.some(
      (user) => user.user.toString() === userId && user.like === "good"
    );
    if (liked) {
      post.like_count--;
      post.like_users = post.like_users.filter(
        (user) => user.user.toString() !== userId
      );

      await post.save();

      return res.status(200).json({
        success: true,
        message: "좋아요를 취소 하였습니다.",
        post,
      });
    }

    // 이미 좋아요를 누른사람이 아니라면, 좋아요를 눌러주자
    post.like_count++;
    post.like_users.push({
      user: userId,
      like: "good",
    });

    await post.save();

    return res.status(200).json({
      success: true,
      message: "좋아요를 눌렀습니다.",
      post,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      e,
    });
  }
};

// 게시물 싫어요
export const dislikePost = async (req: Request, res: Response) => {
  const { postId } = req.body;
  const userId = res.locals.user._id;

  try {
    let post = await Post.findById({ _id: postId });
    if (!post) {
      return res.status(400).json({
        success: false,
        message: "해당 게시물을 찾을 수 없습니다",
      });
    }

    // 좋아요를 누른 상태이면 그냥 return
    const liked = post.like_users.some(
      (user) => user.user.toString() === userId && user.like === "good"
    );
    if (liked) {
      return res.status(409).json({
        success: false,
        message: "현재 좋아요를 누른 상태입니다.",
      });
    }

    // 이미 싫어요를 누른 사람이면 싫어요 누른걸 취소
    const disliked = post.like_users.some(
      (user) => user.user.toString() === userId && user.like === "bad"
    );
    if (disliked) {
      post.like_count++;
      post.like_users = post.like_users.filter(
        (user) => user.user.toString() !== userId
      );

      await post.save();

      return res.status(200).json({
        success: true,
        message: "싫어요를 취소 하였습니다.",
        post,
      });
    }

    post.like_count--;
    post.like_users.push({
      user: userId,
      like: "bad",
    });

    await post.save();

    return res.status(200).json({
      success: true,
      message: "싫어요를 눌렀습니다.",
      post,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      e,
    });
  }
};
