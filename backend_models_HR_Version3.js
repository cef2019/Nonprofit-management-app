const mongoose = require('mongoose');

const HRSchema = new mongoose.Schema({
  name: String,
  position: String,
  startDate: Date,
  email: String,
});

module.exports = mongoose.model('HR', HRSchema);