const express = require('express');
const router = express.Router();
const Project = require('./models/Project');

router.get('/', async (req, res) => {
  const items = await Project.find();
  res.json(items);
});

router.post('/', async (req, res) => {
  const item = new Project(req.body);
  await item.save();
  res.json(item);
});

module.exports = router;