// Load the required packages
const express = require('express');
const nodemon = require('nodemon');
const dotenv = require('dotenv');
const path = require("path");
const cors = require('cors');


const app = express();

// Load the environment variables from the .env file
dotenv.config();

// Create an express app
app.use(cors());
// Set the port for the application
const port = process.env.PORT || 5000;

// Mount the routes to the express app
app.use('/', (req,res) => res.status(200).json({message:"Success",data:[]}));



// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});