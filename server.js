// Load the required packages
const express = require("express");
const nodemon = require("nodemon");
const dotenv = require("dotenv");
const cors = require("cors");

// Load the environment variables from the .env file
dotenv.config();

// The Buttons' route
const buttonRoute = require("./routes/buttonRoute");

// The Native Buttons' route
const nativeButtonRoute = require("./routes/nativeButtonRoute");

// The Power Buttons' route
const powerOptionButtonRoute = require("./routes/powerOptionButtonRoute");

// The Native Buttons' route
const settingOptionButtonRoute = require("./routes/settingOptionButtonRoute");

// The Menu Buttons' route
const menuButtonsRoute = require("./routes/menuButtonsRoute");

// The Events' route
const eventRoute = require("./routes/eventRoute");

// The Users' route
const userRoute = require("./routes/userRoute");

// Initial database connection
const db = require("./data/db");

// Create an express app
const app = express();

// Use the express.json() middleware to parse incoming request bodies
app.use(express.json());

app.use(cors());

// Set the port for the application
const port = process.env.PORT || 5000;

// Mount the routes to the express app
app.use("/api/button", buttonRoute);
app.use("/api/nativeButton", nativeButtonRoute);
app.use("/api/powerOptionButton", powerOptionButtonRoute);
app.use("/api/settingOptionButton", settingOptionButtonRoute);
app.use("/api/menuButton", menuButtonsRoute);

app.use("/api/event", eventRoute);
app.use("/api/user", userRoute);

// Define a catch-all route to handle invalid routes
app.use((req, res, next) => {
  res.status(404).render("error");
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
