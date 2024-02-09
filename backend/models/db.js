const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  username: { type: String, require: true, min: 4, unique: true },
  email: { type: String, require: true, min: 10, unique: true },
  password: { type: String, require: true, min: 4 },
});

const UserModel = model("User", UserSchema);

module.exports = UserModel;
