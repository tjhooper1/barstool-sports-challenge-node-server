const express = require("express");
const router = express.Router();
const {
  getMLBScore,
  createMLBScore,
} = require("../controllers/mlb-controller");

router.get("/", async (_, res) => {
  await getMLBScore(res);  
});

router.post("/", async (_, res) => {
  await createMLBScore(res);
});

module.exports = router;
