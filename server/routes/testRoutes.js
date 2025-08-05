import express from "express"
import { addTests, getAllTests } from "../controllers/testController.js";

const router = express.Router();

router.get("/", getAllTests)
router.post("/addTest", addTests)

export default router;