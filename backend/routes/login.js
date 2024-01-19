const express = require("express");
const router = express.Router();

const loginUser = require("../controllers/login");

router.get("/", (req, res) => {
  res.json("Hello");
});

router.post("/", loginUser.loginUserAccount);

module.exports = router;
