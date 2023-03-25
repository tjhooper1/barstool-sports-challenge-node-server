const MlbModel = require("../models/mlb");
const {
  getSportsData,
  createSportsModel,
} = require("../repository/sports-repository");

async function getMLBScore(res) {
  getSportsData(MlbModel, createMLBScore, res);
}

async function createMLBScore(res) {
  createSportsModel(
    "https://chumley.barstoolsports.com/dev/data/games/eed38457-db28-4658-ae4f-4d4d38e9e212.json",
    MlbModel,
    res
  );
}

module.exports = { getMLBScore, createMLBScore };
