const express = require('express');
const Crop = require('../models/Crop');
const router = express.Router();
console.log("javaScript Connected!");
// Search crop
router.get('/:name', async (req, res) => {
  const crop = await Crop.findOne({
    name: new RegExp(req.params.name, 'i')
  });
  res.json(crop);
});

module.exports = router;
