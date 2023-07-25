import { Router } from "express";
import emailRouter from "./emailRoute";
const router = Router();

router.use("/mail", emailRouter);
router.get("/", (req, res) => res.json("Hello"));

export default router;
