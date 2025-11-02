const express = require("express");

const app = express();

require("dotenv").config();

const port = process.env.port || 7000;

const coursesRouting = require("../routes/courses");

app.use(express.json());

app.use("/api/v1/courses", coursesRouting);

app.use((req, res) => {
  res.status(403).json({
    message: "wrong routing",
    data: null,
  });
});

app.listen(port, () => {
  console.log(`Server Running on Port ${port}`);
});

module.exports = app;
