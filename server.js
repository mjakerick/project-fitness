const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.static('public'));
app.use(express.json());

const logsController = require('./controllers/logs.js');
app.use('/logs', logsController);

app.listen(3000, () => {
  console.log('listening...');
});

mongoose.connect('mongodb://localhost:27017/fitness_logs', { useNewUrlParser: true });
mongoose.connection.once('open', ()=>{
    console.log('connected to mongoose...');
});
