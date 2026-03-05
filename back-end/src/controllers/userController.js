import { UserModel } from "../models/userModel.js";
import { comparePass, generateToken, hashedPass } from "../utils/bcrypt.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import path from "path";

const registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    let profileUrl = "";
    if (req.file) {
      const localFilePath = path.resolve(req.file.path);
      const uploaded = await uploadOnCloudinary(localFilePath);
      profileUrl = uploaded?.secure_url || "";
    }

    const hashedPassword = hashedPass(password);

    const newUser = await UserModel.create({
      name,
      email,
      password: hashedPassword,
      role,
      profile: profileUrl,
    });

    res.status(201).json({
      message: "User registered successfully",
      userData: newUser,
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({
      message: "Internal server error during registration",
      error: error.message,
    });
  }
};
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    const isMatch = comparePass(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }
    const token = generateToken(user);
    const payload = {
      id: user._id,
      email: user.email,
      role: user.role,
    };
    res.status(200).json({
      message: "User login successfully",
      token,
      userData: payload,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error during login",
    });
  }
};
const editUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, role } = req.body;
    const newProfile = req.file ? req.file.filename : user.profile;
    const existUser = await UserModel.findById(id);
    if (!existUser) {
      return res.status(400).json({
        message: "User not found",
      });
    }
    const updataData = {
      name,
      email,
      role,
      profile: newProfile,
    };
    const updatedUser = await UserModel.findByIdAndUpdate(
      id,
      { $set: updataData },
      { new: true },
    );
    res.status(200).json({
      message: "User updated successfully",
      userData: updatedUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error during updation",
    });
  }
};
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        message: "ID is required",
      });
    }
    const user = await UserModel.findByIdAndDelete(id);
    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }
    res.status(200).json({
      message: "User deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error during user delete",
    });
  }
};

export { registerUser, loginUser, editUser, deleteUser };
