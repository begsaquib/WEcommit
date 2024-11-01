
const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  members: [{
    type: String,
  }],
  creator: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const Team = mongoose.model("Team", teamSchema);
module.exports = Team;
