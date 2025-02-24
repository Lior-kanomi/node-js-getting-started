const mongoose = require("mongoose");

// Defining the button schema for the MongoDB collection
const FeedUrlSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
    counter: {
    type: Number,
    default: 0, // Initialize the counter with 0
  },
});

// Creating the Mongoose model for the button collection
const FeedUrl = mongoose.model("FeedUrl", FeedUrlSchema);

// Exports the button model for use in other parts of the application
module.exports = FeedUrl;
