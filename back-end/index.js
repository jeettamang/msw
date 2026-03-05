// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./src/config/db.js";
import userRoutes from "./src/routes/userRoute.js";
import courseRoutes from "./src/routes/courseRoute.js";
import instructorRoutes from "./src/routes/instructorRoute.js";
dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/course", courseRoutes);
app.use("/api/v1/instructor", instructorRoutes);
connectDB();

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
