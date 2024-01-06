const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./Routes/userRoutes");
const studentRoutes = require("./Routes/studentRoutes");
const openaiController = require("./Controllers/openAiController");
const exerciseRouter = require("./Routes/exerciseRoutes");
const individualRoutes = require("./Routes/IndividualUserRoutes");
const requireAuth = require("./middleware/requireAuth");
const cors = require("cors");
require("dotenv").config();
const { getUser } = require("../backend/Controllers/globalUser");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/user", userRoutes);
app.use("/api/student", studentRoutes);
app.use("/api/getUser", getUser);
app.use("/api/exercises", exerciseRouter);
app.use("/api/individual", individualRoutes);

// Route for OpenAI
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
