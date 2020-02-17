/* eslint-disable global-require */
/* eslint-disable class-methods-use-this */

// Importando depedencias
const express = require('express');

const connect = express();
const server = require('http').Server(connect);
const sqlite3 = require('sqlite3');
const routes = require('./routes');


class App {
  constructor() {
    this.connect = express();
    this.sqliteBd();
    this.socketIoConnect();
    this.routes();
    this.server = server;
  }

  sqliteBd() {
    const db = new sqlite3.Database(':memory:', (err) => {
      if (err) {
        console.error(err.message);
      }
      console.log('Connected to the in-memory SQlite database.');
    });

    // close the database connection
  }

  routes() {
    this.connect.use(routes);
  }

  socketIoConnect() {
    const io = require('socket.io')(server);
    io.on('connection', (socket) => {
      console.log(`Socket conectado, id:${socket.id}`);
    });
  }
}


module.exports = new App().server;
