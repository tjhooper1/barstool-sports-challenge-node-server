const mongoose = require("mongoose");

const db = () => {
  const connectionString = process.env.ATLAS_URI || "";
  mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const connection = mongoose.connection;
  connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
  });
  connection.on(
    "error",
    console.error.bind(console, "MongoDB connection error:")
  );
};

module.exports = db;
