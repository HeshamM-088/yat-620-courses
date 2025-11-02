const courses = [
  { id: 1, name: "HTML", price: 100 },
  { id: 2, name: "CSS", price: 200 },
  { id: 3, name: "JS", price: 300 },
];

const get_all_courses = (req, res) => {
  res.status(200).json({
    message: "suceess",
    data: courses,
  });
};

const add_new_course = (req, res) => {
  const check = courses.some(({ name }) => name == req.body.name);

  if (!check) {
    res.status(201).json({
      message: "course added",
      data: courses,
    });
  } else {
    res.status(405).json({
      message: "course already exist ",
      data: null,
    });
  }
};

const get_single_course = (req, res) => {
  const { courseId } = req.params;

  const course = courses.find(({ id }) => id == courseId);

  if (course) {
    res.status(200).json({
      message: "course found",
      data: course,
    });
  } else {
    res.status(404).json({
      message: "invalid course id",
      data: null,
    });
  }
};

module.exports = {
  get_all_courses,
  add_new_course,
  get_single_course,
};
