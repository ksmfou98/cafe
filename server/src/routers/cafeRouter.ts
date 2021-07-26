import express from "express";
import * as cafeCtrl from "../controllers/cafeController";

const router = express.Router();
router.post("/uploadImg", cafeCtrl.uploadImg);
router.post("/create", cafeCtrl.create);
router.get("/readMyCafeList/:userId", cafeCtrl.readMyCafeList);
router.get("/readAllCafeList", cafeCtrl.readAllCafeList);
export default router;
