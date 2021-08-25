import { Request, Response } from "express";
import Comment from "../models/comment";

// 댓글 생성
export const saveComment = async (req: Request, res: Response) => {
  const { postId, content } = req.body;
  const writer = res.locals.user._id;

  try {
    if (!postId || !content) {
      return res.status(400).json({
        success: false,
        message: "해당 게시물이 업거나, 댓글 내용이 입력되지 않았습니다.",
      });
    }

    const comment = new Comment({ postId, content, writer });
    await comment.save();

    return res.status(201).json({
      success: true,
      comment,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      e,
    });
  }
};
