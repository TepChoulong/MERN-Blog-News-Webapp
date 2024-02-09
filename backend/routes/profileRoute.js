const express = require("express");
const Router = express.Router();

const profileController = require("../controllers/profileController");

Router.get("/", profileController.getProfile);
Router.post("/logout", profileController.logout);

module.exports = Router;
