import express from "express";
import * as cafeCtrl from "../controllers/cafeController";

const router = express.Router();

router.post("/create", cafeCtrl.create);

export default router;
