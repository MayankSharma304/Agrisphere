const mongoose = require('mongoose');
console.log("javaScript Connected!");
const connectDB = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/agrisphere");
  console.log("MongoDB Connected");
};

module.exports = connectDB;
