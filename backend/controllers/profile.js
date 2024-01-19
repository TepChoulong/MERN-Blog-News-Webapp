const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const jwtSecret = "saf67w5e2h23vg23hr64sgh231fgh";

const getUserProfile = async (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, jwtSecret, {}, async (err, info) => {
    if (err) throw err;
    res.json(info);
  });

  res.json(req.cookies);
};

module.exports = {
  getUserProfile,
};
