const express = require('express');
const Market = require('../models/Market');
const router = express.Router();
console.log("javaScript Connected!");
router.get('/:crop', async (req, res) => {
  const markets = await Market.find({
    cropName: new RegExp(req.params.crop, 'i')
  });
  res.json(markets);
});

module.exports = router;
