const axios = require("axios");

async function getSportsData(model, createFunction, res) {
  try {
    const data = await model.findOne({});
    if (!data) {
      return await createFunction(res);
    }

    const currentTime = Date.now();
    const timeDifference = currentTime - data.updatedAt;
    if (timeDifference > 15000) {
      console.log("Fetching from barstool");
      await createFunction(res);
    } else {
      console.log("Return cached data");
      res.json(data);
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

async function createSportsModel(barstoolAPI, Model, res) {
  try {
    const response = await axios.get(barstoolAPI);
    if (response.status !== 200) {
      res.status(400).send("Could not fetch data from barstool sports");
    }
    const modelToSend = {
      updatedAt: Date.now(),
      data: response.data,
    };

    const data = await Model.findOneAndUpdate({}, modelToSend, {
      upsert: true,
      new: true,
    });

    res.json(data);
  } catch (error) {
    console.log("There was an error", error);
    res.status(500).send(error);
  }
}

module.exports = { getSportsData, createSportsModel };
