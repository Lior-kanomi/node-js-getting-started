const mongoose = require("mongoose");

// Defining the button schema for the MongoDB collection
const buttonSchema = new mongoose.Schema({
  buttonName: {
    type: String,
    // Enumerated list of possible button names
    enum: [
      // { value: "ChatGptButton", order: 1 },
      // { value: "AmazonButton", order: 2 },
      // { value: "EbayButton", order: 3 },
      // { value: "WeatherButton", order: 4 },
      // { value: "WhatsappWebButton", order: 5 },
      "SnippingToolButton",
      "PowerOptionsButton",
      "SettingsMenuButton",
      "SnippingToolButton",
      "CalculatorButton",
      "SnippingTool",
      "KanomiSearchBar",
      "WhatsappWebButton",
      "BluetoothButton",
      "WeatherButton",
      "AmazonButton",
      "EbayButton",
      "MainAppBarBrowserButton",
      "ChatGptButton",
    ],
    required: true, // buttonName is a required field
  },
  counter: {
    type: Number,
    default: 1, // sets a default value of 1 for the counter field
  },
  url: {
    type: String,
    required: true, // url is a required field
    match: /^https?:\/\/.+/, // url should match this pattern
  },
  icon: {
    type: String, // field for storing the icon
  },

  hint: {
    type: String, // a tooltip field
  },

  order: {
    type: Number, // a tooltip field
  },
});

// Creating the Mongoose model for the button collection
const Button = mongoose.model("Button", buttonSchema);

// Exports the button model for use in other parts of the application
module.exports = Button;
