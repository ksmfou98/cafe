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
