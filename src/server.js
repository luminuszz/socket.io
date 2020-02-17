/* eslint-disable class-methods-use-this */

// Importando depedencias
const express = require('express');

const connect = express();
const server = require('http').Server(connect);
const io = require('socket.io')(server);
const sqlite3 = require('sqlite3');
const routes = require('./routes');


const db = new sqlite3.Database(':memory:');
// Conexões


connect.use(routes);

io.on('connection', (socket) => {
  console.log('conectado');
  console.log(socket.id);
  socket.on('sendMasseg', (dados) => {
    console.log(dados);
  });
});


module.exports = server;
