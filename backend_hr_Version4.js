const express = require('express');
const router = express.Router();
const HR = require('./models/HR');

router.get('/', async (req, res) => {
  const items = await HR.find();
  res.json(items);
});

router.post('/', async (req, res) => {
  const item = new HR(req.body);
  await item.save();
  res.json(item);
});

module.exports = router;