import express from "express";
import {
  editUser,
  loginUser,
  registerUser,
} from "../controllers/userController.js";
import { upload } from "../middlewares/upload.js";
const userRouter = express.Router();

userRouter.post("/register", upload.single("profile"), registerUser);
userRouter.post("/login", loginUser);
userRouter.put("/edit/:id", editUser);
export default userRouter;
