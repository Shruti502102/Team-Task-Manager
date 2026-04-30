const express = require("express");
const router = express.Router();
const Project = require("../models/Project");
const auth = require("../middleware/auth");

// CREATE PROJECT
router.post("/", auth, async (req, res) => {
  const project = await Project.create({
    name: req.body.name,
    admin: req.user.id,
    members: [req.user.id]
  });

  res.json(project);
});

// GET PROJECTS
router.get("/", auth, async (req, res) => {
  const projects = await Project.find({
    members: req.user.id
  });

  res.json(projects);
});

// ADD MEMBER (ADMIN ONLY)
router.put("/:id/add", auth, async (req, res) => {
  const project = await Project.findById(req.params.id);

  if (project.admin.toString() !== req.user.id) {
    return res.status(403).json("Only admin allowed");
  }

  project.members.push(req.body.userId);
  await project.save();

  res.json(project);
});

module.exports = router;
