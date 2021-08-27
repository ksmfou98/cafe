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
      comment: comment.reply[comment.reply.length - 1],
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

// 댓글 수정
export const updateComment = async (req: Request, res: Response) => {
  const { commentId, content } = req.body;
  try {
    // _id 가 commentId 이고 writer가 현재 로그인한 유저인 댓글을 찾음
    // 현재 로그인한 유저인 댓글을 찾는 이유는 내가 작성하지 않은 댓글 수정을 막기위해.

    const comment = await Comment.findById({ _id: commentId });

    if (!comment) {
      return res.status(400).json({
        success: false,
        message: "해당 댓글이 존재하지 않습니다.",
      });
    }

    if (comment.writer.toString() !== res.locals.user._id) {
      return res.status(400).json({
        success: false,
        message: "댓글 작성자가 아닙니다.",
      });
    }

    const updateComment = await comment.updateOne({ content });

    return res.status(200).json({
      success: true,
      comment: updateComment,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      e,
    });
  }
};

// 대댓글 수정
export const updateReplyComment = async (req: Request, res: Response) => {
  const { commentId, replyCommentId, content } = req.body;
  try {
    // 대댓글을 가지고 있는 댓글을 찾고.
    const comment = await Comment.findOne({ _id: commentId });
    if (!comment) {
      return res.status(400).json({
        success: false,
        message: "해당 댓글이 존재하지 않습니다.",
      });
    }

    // 댓글의 대댓글들을 replyComments에다 저장.
    const replyComments = comment.reply;
    // 대댓글을 찾으면 수정시키고 여따가 넣을꺼고 못찾으면 아무값도 없겠지.
    let existReplyComment = undefined;

    // 대댓글 안에서  프론트에서 보낸 대댓글_id를 가지고 현재 로그인한 유저가 작성한 대댓글을 찾음
    for (let replyComment of replyComments) {
      if (
        replyComment._id.toString() === replyCommentId &&
        replyComment.writer.toString() === res.locals.user._id
      ) {
        replyComment.content = content;
        existReplyComment = replyComment;
        break;
      }
    }

    // 없으면 리턴
    if (!existReplyComment) {
      return res.status(400).json({
        success: false,
        message: "해당 대댓글이 존재하지 않거나 , 대댓글 작성자가 아닙니다.",
      });
    }

    // 저장
    await comment.save();

    return res.status(200).json({
      success: true,
      comment: existReplyComment,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      e,
    });
  }
};

// 댓글 삭제
export const deleteComment = async (req: Request, res: Response) => {
  // CommentId로 Comment를 찾아.
  // comment.reply.length가 0보다 크면 그 comment의 deleted를 true로 변경
  // 0보다 크지않으면 그냥 삭제.

  const { commentId } = req.params;
  try {
    const comment = await Comment.findById({ _id: commentId });
    if (!comment) {
      return res.status(400).json({
        success: false,
        message: "해당 댓글이 존재하지 않습니다.",
      });
    }

    if (comment.writer.toString() !== res.locals.user._id) {
      return res.status(400).json({
        success: false,
        message: "댓글 작성자가 아닙니다.",
      });
    }

    if (comment.reply.length > 0) {
      comment.deleted = true;
      await comment.save();
      return res.status(200).json({
        success: true,
        message: "해당 댓글을 삭제했습니다.",
      });
    }
    await comment.deleteOne();
    return res.status(200).json({
      success: true,
      message: "해당 댓글을 삭제했습니다.",
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
    });
  }
};
