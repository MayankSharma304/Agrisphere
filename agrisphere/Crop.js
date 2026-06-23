const mongoose = require('mongoose');
console.log("javaScript Connected!");
const cropSchema = new mongoose.Schema({
  name: String,
  price: Number,
  unit: String,
  image: String
});

module.exports = mongoose.model('Crop', cropSchema);
