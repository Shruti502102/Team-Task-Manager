const express = require("express");
const router = express.Router();
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

// Signup (fake)
router.post("/signup", (req, res) => {
  const { name, email } = req.body;

  const token = jwt.sign({ email }, process.env.JWT_SECRET);

  res.json({ token, user: { name, email } });
});

// Login (fake)
router.post("/login", (req, res) => {
  const { email } = req.body;

  const token = jwt.sign({ email }, process.env.JWT_SECRET);

  res.json({ token, user: { email } });
});

module.exports = router;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// REGISTER
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const hashed = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashed
  });

  res.json(user);
});

// LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) return res.status(400).json("User not found");

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) return res.status(400).json("Wrong password");

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.json({ token });
});

module.exports = router;
