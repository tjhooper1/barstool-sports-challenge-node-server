const NbaModel = require("../models/nba");
const {
  getSportsData,
  createSportsModel,
} = require("../repository/sports-repository");

async function getNBAScore(res) {
  getSportsData(NbaModel, createNBAScore, res);
}

async function createNBAScore(res) {
  createSportsModel(
    "https://chumley.barstoolsports.com/dev/data/games/6c974274-4bfc-4af8-a9c4-8b926637ba74.json",
    NbaModel,
    res
  );
}

module.exports = { getNBAScore, createNBAScore };
