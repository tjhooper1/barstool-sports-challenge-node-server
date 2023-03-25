const mongoose = require("mongoose");

const MlbSchema = new mongoose.Schema({
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
  data: {
    type: Object,
    required: true,
  },
});

const Mlb = mongoose.model("Mlb", MlbSchema);
module.exports = Mlb;
