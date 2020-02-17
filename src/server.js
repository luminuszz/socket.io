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

class App {
  constructor() {
    this.connectClass = express();
    this.routes();
    this.io();
  }

  routes() {
    this.connectClass.use(routes);
  }

  io() {
    io.on('connection', (socket) => {
      console.log('conectado');
      console.log(socket.id);
      socket.emit('notícias', { olá: 'mundo' });
    });
    io.on('disconnect', () => {
      console.log('desconectado');
    });
  }
}


module.exports = new App().connectClass;
