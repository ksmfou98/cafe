import express from "express";
import * as cafeCtrl from "../controllers/cafeController";

const router = express.Router();
router.post("/uploadImg", cafeCtrl.uploadImg); // 카페 등록 썸네일 이미지
router.post("/create", cafeCtrl.create); // 카페 등록
router.get("/readMyCafeList/:userId", cafeCtrl.readMyCafeList); // 내 카페 리스트
router.get("/readAllCafeList", cafeCtrl.readAllCafeList); // 전체 카페 리스트
router.get("/cafeInfo/:route/:userId", cafeCtrl.CafeInfo);
export default router;
