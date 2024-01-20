const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT;

// # Variables

app.use(cors());
app.use(express.json());
app.use(cookieParser());

mongoose
  .connect(process.env.MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

// MongoDB Atlas Password: ls4daG4FWdVsCGlq

app.listen(port, () => console.log(`Server running on port ${port}`));
