import express from "express";
import * as boardCtrl from "../controllers/boardController";
import checkManager from "../lib/checkManager";

const router = express.Router();

router.post("/create", checkManager, boardCtrl.create); // 게시판 생성
router.get("/readBoardList/:cafeId", boardCtrl.readBoardList); // 게시판 목록 조회
router.patch("/update", checkManager, boardCtrl.update); // 게시판 수정

export default router;
