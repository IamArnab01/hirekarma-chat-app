const mongoose = require("mongoose");

const ChatUserPairSchema = new mongoose.Schema(
  {
    members: { type: Array },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ChatUserPair", ChatUserPairSchema);
