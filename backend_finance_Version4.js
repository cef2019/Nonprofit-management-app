const express = require('express');
const router = express.Router();
const Finance = require('./models/Finance');

router.get('/', async (req, res) => {
  const items = await Finance.find();
  res.json(items);
});

router.post('/', async (req, res) => {
  const item = new Finance(req.body);
  await item.save();
  res.json(item);
});

module.exports = router;