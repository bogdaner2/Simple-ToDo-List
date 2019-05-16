require('dotenv').config();
const express = require('express');
const app = express();
const server = require('http').Server(app);

// connect to database
require('./app/database')();

// init sockets
const io = require('socket.io')(server);
const sockets = require("./app/sockets").default(io);

app.get('/', (req, res) => res.send('Simple To Do List. Utilized express, mongoose, socket.io'));
  
app.listen(process.env.SERVER_PORT || 3000, () => console.log(`Server starts on ${process.env.SERVER_PORT || 3000} port`));