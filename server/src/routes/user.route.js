import { Router } from "express";
import { registerUser, verifyEmail } from "../controller/auth.controller.js";

const router = Router();

router.post("/register", registerUser);
router.get("/verify-email", verifyEmail);

export default router;
