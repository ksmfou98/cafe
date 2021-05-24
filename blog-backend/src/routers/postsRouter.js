import express from "express";
import * as postsCtrl from "../controllers/postsController";

const router = express.Router();

router.get("/", postsCtrl.list);
router.post("/", postsCtrl.write);
router.get("/:id", postsCtrl.checkObjectId, postsCtrl.read);
router.delete("/:id", postsCtrl.checkObjectId, postsCtrl.remove);
router.patch("/:id", postsCtrl.checkObjectId, postsCtrl.update);

export default router;
