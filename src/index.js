import express from "express";
import connectDB from "./db/index.js";
const app = express();
const port = 3000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.log("Error in app listening", error.message);
  });
