const express = require('express');
const router = express.Router();
const Logs = require('../models/logs.js');

router.get('/', (req, res) => {
  Logs.find({}, (error, foundLog) => {
    res.json(foundLog);
  });
});

router.delete('/:id', (req, res) => {
  Logs.findByIdAndRemove(req.params.id, (err, deletedLog) =>{
    res.json(deletedLog)
  })
})

router.post('/', (req, res) => {
  Logs.create(req.body, (err, createdLog) => {
    res.json(createdLog)
  })
})

module.exports = router;
