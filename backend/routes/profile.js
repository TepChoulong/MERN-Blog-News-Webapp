const express = require("express");
const router = express.Router();

const profileUser = require("../controllers/profile");

router.get("/", profileUser.getUserProfile);

module.exports = router;
