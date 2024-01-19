const bcrypt = require("bcrypt");
const User = require("../models/user");

const salt = bcrypt.genSaltSync(10);

const createUserAccount = async (req, res) => {
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
};

module.exports = {
  createUserAccount,
};
