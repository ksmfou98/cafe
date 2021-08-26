import express from "express";
import * as boardCtrl from "../controllers/boardController";
import checkLoggedIn from "../lib/checkLoggedin";
import checkUserIsManager from "../lib/checkUserIsManager";


const router = express.Router();

router.post(
  "/create/:cafeId",
  checkLoggedIn,
  checkUserIsManager,
  boardCtrl.createBoard
); // 게시판 생성

router.get("/readBoardList/:cafeId", boardCtrl.readBoardList); // 게시판 목록 조회
router.patch(
  "/update/:cafeId",
  checkLoggedIn,
  checkUserIsManager,
  boardCtrl.updateBoard
); // 게시판 수정
router.delete(
  "/delete/:cafeId/:boardId",
  checkLoggedIn,
  checkUserIsManager,
  boardCtrl.deleteBoard
); // 게시판 삭제

export default router;
