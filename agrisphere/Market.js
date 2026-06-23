const mongoose = require('mongoose');
console.log("javaScript Connected!");
const marketSchema = new mongoose.Schema({
  cropName: String,
  locationName: String,
  latitude: Number,
  longitude: Number
});

module.exports = mongoose.model('Market', marketSchema);
