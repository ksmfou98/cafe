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

export default router;
