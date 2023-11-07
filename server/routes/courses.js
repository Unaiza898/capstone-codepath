import express from "express";
import CourseController from "../controllers/courses.js";

const router = express.Router();

// @route   GET api/courses

router.get("/", CourseController.getCourses);
router.get("/:id", CourseController.getCourseById);
router.post("/", CourseController.createCourse);
router.delete("/:id", CourseController.deleteCourse);
router.patch("/:id", CourseController.updateCourse);

export default router;
