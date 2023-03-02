const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  eventName: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  },
  properties: {
    type: Map,
    of: String | Object,
    required: true,
  },
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
