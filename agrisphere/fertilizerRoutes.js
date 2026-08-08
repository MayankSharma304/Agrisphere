const express = require('express');
const Fertilizer = require('../models/Fertilizer');
const router = express.Router();
console.log("javaScript Connected!");
router.get('/', async (req, res) => {
  const fertilizers = await Fertilizer.find();
  res.json(fertilizers);
});

module.exports = router;
