const express = require("express");
const router = express.Router();
const Task = require("../models/Task");
const auth = require("../middleware/auth");

// CREATE TASK
router.post("/", auth, async (req, res) => {
  const task = await Task.create({
    ...req.body
  });

  res.json(task);
});

// GET TASKS BY PROJECT
router.get("/:projectId", auth, async (req, res) => {
  const tasks = await Task.find({
    project: req.params.projectId
  });

  res.json(tasks);
});

// UPDATE STATUS
router.put("/:id", auth, async (req, res) => {
  const task = await Task.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );

  res.json(task);
});

module.exports = router;
