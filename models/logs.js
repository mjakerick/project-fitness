const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
    title: String,
    description: String
});

const Logs = mongoose.model('Log', logSchema);

module.exports = Logs;
