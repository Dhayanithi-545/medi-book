import express from 'express'
import dotenv from "dotenv"
import { connectDB } from './config/db.js'
import authRoutes from './routes/authRoutes.js'
import testRoutes from "./routes/testRoutes.js"
dotenv.config()
import cors from "cors"
const app = express();
app.use(cors());
connectDB();
import bookingRoutes from "./routes/bookingRoutes.js"
import reportRoutes from "./routes/reportRoutes.js"
app.use(express.json())

app.use("/api/auth", authRoutes)
app.use("/api/tests", testRoutes)

app.use("/api/bookings", bookingRoutes);
app.use("/api/reports", reportRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, ()=> console.log(`Server running on http://localhost:${PORT}`))