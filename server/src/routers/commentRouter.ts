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

export default router;
