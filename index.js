require('dotenv').config();
const express = require('express');
const app = express();
const server = require('http').Server(app);

// connect to database
require('./app/data-access-layer/database')();
//register routes
require('./app/routes/routes')(app);
// init sockets
const io = require("socket.io")(server);
require("./app/sockets")(io);

app.listen(process.env.SERVER_PORT || 3000, () => console.log(`Server starts on ${process.env.SERVER_PORT || 3000} port`));