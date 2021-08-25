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

    let comment = new Comment({ postId, content, writer });
    comment = await comment.populate("writer").execPopulate();
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

// 대댓글 생성
export const saveReplyComment = async (req: Request, res: Response) => {
  const { commentId, content, responseTo } = req.body;
  const writer = res.locals.user._id;
  try {
    let comment = await Comment.findById({ _id: commentId });

    const replyComment = { writer, content, responseTo };
    comment.reply.push(replyComment);
    comment = await comment
      .populate("reply.writer reply.responseTo")
      .execPopulate();

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

// 댓글 리스트 조회
export const readComments = async (req: Request, res: Response) => {
  const { postId } = req.params;
  try {
    const comments = await Comment.find({ postId }).populate(
      "writer reply.writer reply.responseTo",
      {
        name: 1,
        email: 1,
        _id: 1,
        nickname: 1,
      }
    );

    return res.status(200).json({
      success: true,
      comments,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      e,
    });
  }
};
