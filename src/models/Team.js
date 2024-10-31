
const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
  }],
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
}, { timestamps: true });

const Team = mongoose.model("Team", teamSchema);
module.exports = Team;
