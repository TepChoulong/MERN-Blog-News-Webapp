const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

const jwtSecret = "saf67w5e2h23vg23hr64sgh231fgh";

router.get("/", (req, res) => {
  res.json("Hello");
});

router.post("/", async (req, res) => {
  const { email, password } = req.body;
  try {
    const userDoc = await User.findOne({ email });
    const passOK = bcrypt.compare(password, userDoc.password);
    if (passOK) {
      jwt.sign({ email, id: userDoc._id }, jwtSecret, {}, (err, token) => {
        if (err) throw err;
        res.cookie("token", token).json("ok");
      });
    } else {
      res.status(400).json("Error: " + e);
    }
  } catch (e) {
    res.status(400).json("Error: " + e);
  }
});

module.exports = router;
