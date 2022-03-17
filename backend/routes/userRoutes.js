import express from "express";
import { authUser, registerUser } from "../controllers/userController.js";
const router = express.Router();

router.route("/").post(registerUser);
router.post("/login", authUser);
// router.route("/profile").post(updateUserController);

export default router;
