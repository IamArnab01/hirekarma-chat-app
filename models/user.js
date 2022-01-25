const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      max: 50,
      required: false,
      default: "",
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    contact: {
      type: Number,
      required: false,
      max: 10,
      default: "",
    },
    gender: {
      type: String,
      required: false,
      max: 10,
      default: "",
    },
    photo: {
      type: String,
      required: false,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
