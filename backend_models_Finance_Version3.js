const mongoose = require('mongoose');

const FinanceSchema = new mongoose.Schema({
  title: String,
  amount: Number,
  date: Date,
  description: String,
});

module.exports = mongoose.model('Finance', FinanceSchema);