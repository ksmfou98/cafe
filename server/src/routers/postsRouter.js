import express from "express";
import * as postsCtrl from "../controllers/postsController";
import checkLoggedIn from "../lib/checkLoggedIn";

const router = express.Router();

router.get("/", postsCtrl.list);
router.post("/", checkLoggedIn, postsCtrl.write);
router.get("/:id", postsCtrl.getPostById, postsCtrl.read);
router.delete(
  "/:id",
  postsCtrl.getPostById,
  checkLoggedIn,
  postsCtrl.checkOwnPost,
  postsCtrl.remove
);
router.patch(
  "/:id",
  postsCtrl.getPostById,
  checkLoggedIn,
  postsCtrl.checkOwnPost,
  postsCtrl.update
);

export default router;
