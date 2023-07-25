import { Router } from "express";
import { sendCodeEmail } from "../controllers/email";
const router = Router();

router.post("/code", sendCodeEmail);

export default router;
