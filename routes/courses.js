const express = require("express");
const {
  get_all_courses,
  add_new_course,
  get_single_course,
} = require("../controllers/courses");
const courseAuth = require("../middleware/courseAuth");

const router = express.Router();

router.get("/", get_all_courses).post("/", courseAuth, add_new_course);

router.get("/:courseId", get_single_course);

module.exports = router;
