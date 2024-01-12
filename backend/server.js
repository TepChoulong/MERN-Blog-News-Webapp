const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const User = require("./models/user");

require("dotenv").config();

const app = express();
const port = process.env.PORT;

// # Variables
const jwtSecret = "saf67w5e2h23vg23hr64sgh231fgh";
const salt = bcrypt.genSaltSync(10);

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());

mongoose
  .connect(process.env.MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

// $ Register
app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      email,
      password: bcrypt.hashSync(password, salt),
    });
    if (userDoc) {
      res.json("Success");
    }
  } catch (e) {
    res.status(400).json("Error: " + e);
  }
});

// $ Login
app.post("/login", async (req, res) => {
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

// Get the userst
app.get("/getUsers", async (req, res) => {
  try {
    User.find().then((users) => res.json(users));
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
