const express = require('express');
const router = express.Router();
const Logs = require('../models/logs.js');

router.get('/', (req, res) => {
  Logs.find({}, (error, foundLog) => {
    res.json(foundLog);
  });
});

module.exports = router;
