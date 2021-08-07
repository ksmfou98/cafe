import express from "express";
import * as boardCtrl from "../controllers/boardController";
import checkManager from "../lib/checkManager";

const router = express.Router();

router.post("/create", checkManager, boardCtrl.create); // 게시판 생성

export default router;
