const express = require("express");
const Router = express.Router();

const authController = require("../controllers/authController");

Router.post("/register", authController.CreateNewUser);
Router.post("/login", authController.login);

module.exports = Router;
