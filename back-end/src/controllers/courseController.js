import path from "path";
import { CourseModel } from "../models/courseModel.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const createCourse = async (req, res) => {
  try {
    const { title, description, price, duration, instructor } = req.body;
    if (!title || !description || !price || !duration || !instructor) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }
    const existCourse = await CourseModel.findOne({ title: title });
    if (existCourse) {
      return res.status(400).json({
        message: "Course already exist",
      });
    }
    let imageUrl = "";
    if (req.file) {
      const localPath = path.resolve(req.file.path);
      const uploaded = await uploadOnCloudinary(localPath);
      imageUrl = uploaded?.secure_url || "";
    }
    const newCourse = await CourseModel.create({
      title,
      description,
      price: +price,
      duration,
      instructor,
      image: imageUrl,
    });
    res.status(200).json({
      message: "Course created successfully",
      course: newCourse,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error during course creation",
      err: error.message,
    });
  }
};

const getCourses = async (req, res) => {
  try {
    const courses = await CourseModel.find();
    res.status(200).json({
      message: "Course fetched successfully",
      course: courses,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error during of fetching of courses",
      err: error.message,
    });
  }
};

const getCourseById = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await CourseModel.findById(id).populate("Instruction");
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    res
      .status(200)
      .json({ message: "Course fetched successfully", courseDetail: course });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching course",
      error: error.message,
    });
  }
};
export { createCourse, getCourses, getCourseById };
