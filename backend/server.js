const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const User = require("./models/user");

require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      email,
      password,
    });
    res.json("Success: " + userDoc);
  } catch (e) {
    res.status(400).json("Error: " + e);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const userDoc = await User.findOne({ email });
    if (userDoc) {
      if (password === userDoc.password) {
        res.json("Login Successful: " + userDoc.username);
      } else {
        res.status(400).json("Wrong password");
      }
    } else {
      res.status(400).json("User not found");
    }
  } catch (e) {
    res.status(400).json("Error: " + e);
  }
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`localhost:${port}`);
  }
});

// MongoDB Atlas Password: ls4daG4FWdVsCGlq
//
