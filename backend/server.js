const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

const registerRouter = require("./routes/register");
const loginRouter = require("./routes/login");
const profileRouter = require("./routes/profile");

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

app.use("/register", registerRouter); // $ Register
app.use("/login", loginRouter); // $ Login
app.use("/profile", profileRouter); // $ Profile

// Get all the users
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
