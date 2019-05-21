const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  type: String,
  title: String,
  description: String
});

const Logs = mongoose.model('Log', logSchema);

module.exports = Logs;
