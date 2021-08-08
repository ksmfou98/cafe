import express from "express";
import * as postCtrl from "../controllers/postController";
import checkLoggedIn from "../lib/checkLoggedin";
import checkUserIsMember from "../lib/checkUserIsMember";

const router = express.Router();

router.post(
  "/create/:cafeId",
  checkLoggedIn,
  checkUserIsMember,
  postCtrl.createPost
); // 게시물 생성

router.get("/readPostList/:cafeId/:boardId", postCtrl.readPostList);

export default router;
