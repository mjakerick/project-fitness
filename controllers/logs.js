const express = require('express');
const router = express.Router();
const Logs = require('../models/logs.js');

router.get('/', (req, res) => {
  Logs.find({userId: req.session.currentUser._id}, (error, foundLog) => {
    // console.log(req.session.currentUser._id);
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

router.put('/:id', (req, res) => {
  Logs.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedLog) => {
    res.json(updatedLog)
  })
})

module.exports = router;
