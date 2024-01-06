const express = require("express");

require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.get("/test", (req, res) => {
  res.json({ message: "Hello" });
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`localhost:${port}`);
  }
});
