const jwt = require("jsonwebtoken");

async function getProfile(req, res) {
  try {
    const { token } = req.cookies;

    if (!token) {
      return res.status(401).json({ error: "Unauthorized: Missing token" });
    }

    jwt.verify(token, "secret", {}, (err, userInfo) => {
      if (err) {
        return res.status(401).json({ error: "Unauthorized: Invalid token" });
      }

      res.json(userInfo);
    });
  } catch (error) {
    console.error("Error in getProfile:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

function logout(req, res) {
  res.cookie("token", "").json("ok");
}

module.exports = {
  getProfile,
  logout,
};
