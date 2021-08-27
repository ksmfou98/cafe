import express from "express";
import * as commentCtrl from "../controllers/commentController";
import checkLoggedIn from "../lib/checkLoggedin";
import checkUserIsMember from "../lib/checkUserIsMember";

const router = express.Router();

router.post(
  "/saveComment/:cafeId",
  checkLoggedIn,
  checkUserIsMember,
  commentCtrl.saveComment
); // 댓글 생성

router.post(
  "/saveReplyComment/:cafeId",
  checkLoggedIn,
  checkUserIsMember,
  commentCtrl.saveReplyComment
); // 대댓글 생성

router.get("/readComments/:postId", commentCtrl.readComments); // 댓글 조회

router.patch(
  "/updateComment/:cafeId",
  checkLoggedIn,
  checkUserIsMember,
  commentCtrl.updateComment
); // 댓글 수정

router.patch(
  "/updateReplyComment/:cafeId",
  checkLoggedIn,
  checkUserIsMember,
  commentCtrl.updateReplyComment
); // 대댓글 수정

router.delete(
  "/deleteComment/:cafeId/:commentId",
  checkLoggedIn,
  checkUserIsMember,
  commentCtrl.deleteComment
); // 댓글 삭제

export default router;
