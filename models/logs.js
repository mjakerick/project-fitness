const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  userId: String,
  type: String,
  title: String,
  description: String
});

const Logs = mongoose.model('Log', logSchema);

module.exports = Logs;
