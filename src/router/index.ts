import { Router } from "express";
import emailRouter from "./emailRoute";
const router = Router();

router.use("/mail", emailRouter);

export default router;
