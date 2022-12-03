const mongoose = require("mongoose");
const { stringify } = require("querystring");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    firstname: String,
    lastname: String,
    dateOfBirth: String,
    email: String,
    phoneNumber: String,
    password: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  })
);

module.exports = User;
