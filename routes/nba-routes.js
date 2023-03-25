const express = require("express");
const router = express.Router();
const {
  getNBAScore,
  createNBAScore,
} = require("../controllers/nba-controller");

router.get("/", async (_, res) => {
  await getNBAScore(res);
});

router.post("/", async (_, res) => {
  await createNBAScore(res);
});

module.exports = router;
