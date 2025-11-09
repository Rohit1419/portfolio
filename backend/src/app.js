import express from "express";
import cors from "cors";

const app = express();
app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

const BASE_URL = process.env.BASE_URL || "/api/v1";

// Importing all routes
import allRoutes from "./routes/all.route.js";
app.use(BASE_URL, allRoutes);

app.get("/", (req, res) => {
  res.send("API is running...What the F*ck are u doing here !");
});

export default app;
