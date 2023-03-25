const mongoose = require("mongoose");

const NbaSchema = new mongoose.Schema({
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
  data: {
    type: Object,
    required: true,
  },
});

const Nba = mongoose.model("Nba", NbaSchema);
module.exports = Nba;
