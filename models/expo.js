const mongoose = require("mongoose");
const { Schema } = mongoose;

const Expo = new Schema(
  {
    name: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Expo", Expo);
