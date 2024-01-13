const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

const User = require("./models/user");
const registerRouter = require("./routes/register");
const loginRouter = require("./routes/login");

require("dotenv").config();

const app = express();
const port = process.env.PORT;

// # Variables

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());
app.use(cookieParser());

mongoose
  .connect(process.env.MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

// $ Register
app.use("/register", registerRouter);

// $ Login
app.use("/login", loginRouter);

// Get the userst
app.get("/getUsers", async (req, res) => {
  try {
    User.find().then((users) => res.json(users));
  } catch (e) {
    res.status(400).json("Error: " + e);
  }
});

app.get("/profile", (req, res) => {
  res.json(req.cookies);
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
