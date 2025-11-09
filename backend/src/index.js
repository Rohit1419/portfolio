import dotenv from "dotenv";
import connectDB from "./db/db.js";
import app from "./app.js";
import { v2 as cloudinary } from "cloudinary";
dotenv.config({ path: "./.env" });

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("Error:", error);
    });

    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server is running on port ${process.env.PORT || 5000}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
