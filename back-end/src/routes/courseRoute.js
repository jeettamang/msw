import express from "express";
import {
  createCourse,
  getCourseById,
  getCourses,
} from "../controllers/courseController.js";
import { upload } from "../middlewares/upload.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
const courseRouter = express.Router();

courseRouter
  .post(
    "/create",
    upload.single("image"),
    authMiddleware(["Instructor", "Admin"]),
    createCourse,
  )
  .get("/get-all", getCourses)
  .get("/get/:id", getCourseById);

export default courseRouter;
