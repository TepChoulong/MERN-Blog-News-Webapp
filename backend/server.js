const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT;

// # Variables

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());

/* !Database Connection */
mongoose // MongoDB Atlas Password: ls4daG4FWdVsCGlq
  .connect(process.env.MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

<<<<<<< HEAD
// MongoDB Atlas Password: ls4daG4FWdVsCGlq
=======
app.use("/api", require("./routes/authRoute"));
app.use("/profile", require("./routes/profileRoute"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});
>>>>>>> a814be23f37a580689c387aff7c4232795d666a8

app.listen(port, () => console.log(`Server running on port ${port}`));
