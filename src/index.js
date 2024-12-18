import app from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config("./env");

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Example app listening on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error in app listening", error.message);
  });
