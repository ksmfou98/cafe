import express from "express";
import * as boardCtrl from "../controllers/boardController";
import checkLoggedIn from "../lib/checkLoggedin";
import checkUserIsManageer from "../lib/checkUserIsManager";
import checkManager from "../lib/checkUserIsManager";

const router = express.Router();

router.post(
  "/create/:cafeId",
  checkLoggedIn,
  checkUserIsManageer,
  boardCtrl.createBoard
); // 게시판 생성
router.get("/readBoardList/:cafeId", boardCtrl.readBoardList); // 게시판 목록 조회
router.patch(
  "/update/:cafeId",
  checkLoggedIn,
  checkUserIsManageer,
  boardCtrl.updateBoard
); // 게시판 수정
router.delete(
  "/delete/:cafeId/:boardId",
  checkLoggedIn,
  checkUserIsManageer,
  boardCtrl.deleteBoard
); // 게시판 삭제

export default router;
