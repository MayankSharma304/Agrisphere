const mongoose = require('mongoose');
console.log("javaScript Connected!");
const fertilizerSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String
});

module.exports = mongoose.model('Fertilizer', fertilizerSchema);
