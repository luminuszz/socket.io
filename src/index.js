
const connect = require('./server');

// Definindo porta
let port = process.env.PORT;
if (port == null || port === '') {
  port = 8000;
}

connect.listen(port, () => {
  console.log('Servidor Rodando');
});


/**
 * const express = require('express');
// Definindo variavel do express
const app = express();
// Criando comunicação entre o express e o socket.io
const server = require('http').createServer(app);
const io = require('socket.io').listen((server));

 * io.on('connection', (socket) => {
  console.log('conectado');
  console.log(`Id da conexão ${socket.id}`);

  socket.on('sendMasseg', (data) => {
    console.log(data);
  });
});
// Definindo porta
let port = process.env.PORT;
if (port == null || port === '') {
  port = 8000;
}

server.listen(port, () => {
  console.log('Servidor Rodando');
});

 */
