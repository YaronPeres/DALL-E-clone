import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongodb/connect.js";

import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

// api endpoint to connect/ hook from the frontside
app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);

//routes
app.get("/", async (req, res) => {
  res.send("Hello from DALL-E!");
});

// starting server
const startServer = async () => {
  try {
    // connecting the mongoDB passing url
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () =>
      console.log("Server has started on port http://localhost:8080")
    );
  } catch (error) {
    console.log(error);
  }
};
startServer();
