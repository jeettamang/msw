import express from "express";
import { upload } from "../middlewares/upload.js";
import {
  createInstructor,
  deleteIns,
  getInstructors,
  loginInstructor,
  updateInstructor,
} from "../controllers/instructorController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
const instructorRouter = express.Router();

instructorRouter
  .post("/create", upload.single("profileImage"),authMiddleware(["Admin"]), createInstructor)
  .post("/login", loginInstructor)
  .get("/get-all", getInstructors)
  .put("/update/:id", upload.single("profileImage"),authMiddleware([]), updateInstructor)
  .delete("/delete/:id",authMiddleware(["Admin"]), deleteIns);

export default instructorRouter;
