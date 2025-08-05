import express from "express"
import { protect } from "../middleware/authMiddleware.js"
import { bookTest, geetBookings } from "../controllers/bookingController.js"

const router = express.Router()

router.post("/", protect,bookTest)
router.get("/", protect, geetBookings)

export default router
