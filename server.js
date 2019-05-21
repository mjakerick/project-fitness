require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const session = require('express-session');

const PORT = process.env.PORT
const mongoURI = process.env.MONGODB_URI

app.use(express.static('public'));
app.use(express.json());

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false
}))

const logsController = require('./controllers/logs.js');
app.use('/logs', logsController);

const userController = require('./controllers/users.js')
app.use('/users', userController);

const sessionsController = require('./controllers/sessions.js');
app.use('/sessions', sessionsController);

app.listen(PORT, () => console.log('auth happening on port', PORT))

mongoose.connect(mongoURI, { useNewUrlParser: true });
mongoose.connection.once('open', ()=>{
    console.log('connected to mongoose...');
});
