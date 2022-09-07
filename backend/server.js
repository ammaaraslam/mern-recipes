// This is the main file, containing all information, imports and execution of the backend. This is the file that is run by the command "npm start".

import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import recipeRoutes from "./routes/recipes.js";

// Initialization of the server.
const app = express();
// Calling this function in order to accept environmental variables in the application.
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Set a default(base) route for the application.
// Every route needs to pass this one.
// For example:- If the route is "/:id" then the actual route is "/api/recipes/123456789"
app.use("/api/recipes", recipeRoutes);

const PORT = process.env.PORT || 5000;

// Connecting backend to database and starting the server.
mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server successfully running on port: ${PORT}`)
    )
  )
  .catch((error) => console.log(error.message));
