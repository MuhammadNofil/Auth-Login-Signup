require("dotenv").config();
const app = require("./app");
const mongoose = require("mongoose");

const Init = async () => {
  app.listen(process.env.PORT || 3000, () =>
    console.log(`listening on ${process.env.PORT}`)
  );
  try {
    await mongoose.connect(process.env.DATABSE_URL);
    console.log("connected to database");
  } catch (error) {
    throw new Error(error.message);
  }
};

Init();
