const mongoose = require('mongoose');

const SupplyChainSchema = new mongoose.Schema({
  item: String,
  quantity: Number,
  status: String,
  arrivalDate: Date,
});

module.exports = mongoose.model('SupplyChain', SupplyChainSchema);