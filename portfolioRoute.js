import express from "express";
import { sendEmailController } from "./portfolioController.js";
const router = express.Router();
router.post("/sendEmail",sendEmailController);
export default router; 