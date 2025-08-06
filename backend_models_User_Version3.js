const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String // For demo only; use hashing in production!
});

module.exports = mongoose.model('User', UserSchema);