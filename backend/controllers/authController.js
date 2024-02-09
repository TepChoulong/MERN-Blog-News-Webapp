const UserModel = require("../models/db");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

async function CreateNewUser(req, res) {
  const { username, email, password } = req.body;

  const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

  const existedUser = await UserModel.findOne({ email });
  if (existedUser) {
    return res.status(400).json({
      success: false,
      message: "User already existed!",
    });
  }

  const newUser = await UserModel.create({
    username,
    email,
    password: hashedPassword,
  });
  res.json(`Created new user: ${newUser} successfully!`);
}

async function login(req, res) {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  const isPasswordOK = bcrypt.compareSync(password, user.password);
  if (isPasswordOK) {
    jwt.sign(
      {
        username: user.username,
        email: user.email,
        id: user._id,
      },
      "secret",
      {},
      (err, token) => {
        if (err) return res.status(500).json({ success: false, err });
        res
          .cookie("token", token)
          .json({ success: true, email: user.email, id: user._id });
      }
    );
  } else {
    alert("Wrong Password");
  }
}

module.exports = {
  CreateNewUser,
  login,
};
