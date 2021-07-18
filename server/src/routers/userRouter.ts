import express from "express";
import * as userCtrl from "../controllers/userController";

const router = express.Router();

router.post("/register", userCtrl.register); // 회원가입
router.post("/login", userCtrl.login); // 로그인 
router.post("/logout", userCtrl.logout); // 로그아웃 

export default router;
