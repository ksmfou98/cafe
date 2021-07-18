import express from "express";
import * as userCtrl from "../controllers/userController";

const router = express.Router();

router.post("/register", userCtrl.register); // 회원가입


export default router;
