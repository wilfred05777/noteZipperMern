import express from "express";
import { authUser, registerUser } from "../controllers/userController.js";
const router = express.Router();

// https://www.youtube.com/watch?v=iw5RSIflYGU&list=PLKhlp2qtUcSYC7EffnHzD-Ws2xG-j3aYo&index=10

router.route("/").post(registerUser);
router.post("/login", authUser);
// router.route("/profile").post(updateUserController);

export default router;
