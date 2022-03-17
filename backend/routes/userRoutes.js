import express from "express";
import { registerUser } from "../controllers/userController";
const router = express.Router();

router.route("/").post(registerUser);
router.post("/login", authUser);
router.route("/profile").post(updateUserController);

export default router;
