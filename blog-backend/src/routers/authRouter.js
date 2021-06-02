import express from "express";
import * as authCtrl from "../controllers/authController";

const router = express.Router();

router.post("/register", authCtrl.register);
router.post("/login", authCtrl.login);
router.get("/check", authCtrl.check);
router.post("/logout", authCtrl.logout);

export default router;
