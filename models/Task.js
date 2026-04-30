const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project"
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  status: {
    type: String,
    enum: ["todo", "inprogress", "done"],
    default: "todo"
  },
  dueDate: Date,
  priority: String
});

module.exports = mongoose.model("Task", taskSchema);
