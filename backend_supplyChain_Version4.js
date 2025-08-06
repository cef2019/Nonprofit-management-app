const express = require('express');
const router = express.Router();
const SupplyChain = require('./models/SupplyChain');

router.get('/', async (req, res) => {
  const items = await SupplyChain.find();
  res.json(items);
});

router.post('/', async (req, res) => {
  const item = new SupplyChain(req.body);
  await item.save();
  res.json(item);
});

module.exports = router;