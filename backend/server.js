const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./Routes/userRoutes");
const studentRoutes = require("./Routes/studentRoutes");
const openaiController = require("./Controllers/openAiController");
const requireAuth = require("./middleware/requireAuth");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use("/api/user", userRoutes);
app.use("/api/student", studentRoutes);

// Add a route for OpenAI
app.post("/api/openai", requireAuth, openaiController.handleOpenAIRequest);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Connected to db & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
