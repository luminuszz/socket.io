/* eslint-disable class-methods-use-this */
const express = require('express');

const connect = express();

const server = require('http').Server(connect);

const io = require('socket.io')(server);

function connectIo() {
  io.on('connection', (socket) => {
    console.log(socket.id);
  });
}


module.exports = connectIo();
