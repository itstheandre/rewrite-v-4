const express = require("express");
const Task = require("../models/Task.model");
const router = express.Router();

router.get("/", (req, res) => {
  Task.find()
    .then((tasks) => {
      res.json({ tasks });
      // if (tasks.length) {
      //   res.status(200).json({ tasks });
      // } else {
      //   res.status(404).json({ errorMessage: "No tasks were found" });
      // }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ errorMessage: "Internal error", errorDetail: err });
    });
});

router.post("/", (req, res) => {
  const { title, body } = req.body;
  //controlling request data
  if (!title || !body) {
    res.status(500).json({ errorMessage: " either title or body is empty" });
    return;
  }
  Task.create({ title, body })
    .then((task) => {
      res.status(201).json({ task });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ errorMessage: "Internal error", errorDetail: err });
    });
});

router.delete("/:taskId", (req, res) => {
  const { taskId } = req.params;
  Task.findByIdAndDelete({ _id: taskId })
    .then(() => res.status(200).json({ success: "The task was deleted" }))
    .catch((err) => {
      res
        .status(500)
        .json({ errorMessage: "Internal error", errorDetail: err });
    });
});

router.put("/:taskId", (req, res) => {
  const { taskId } = req.params;
  const { title, body } = req.body;
  if (!title || !body) {
    res.status(200).json({ errorMessage: " either title or body is empty" });
    return;
  }
  Task.findByIdAndUpdate({ _id: taskId }, { title, body }, { new: true })
    .then((task) =>
      res.status(200).json({ success: "The task was updated", task })
    )
    .catch((err) => {
      res
        .status(500)
        .json({ errorMessage: "Internal error", errorDetail: err });
    });
});

module.exports = router;
