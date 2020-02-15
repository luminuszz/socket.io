const express = require('express');
const path = require('path');

// Definindo variavel do express
const app = express();
// Criando comunicação entre o express e o socket.io
const server = require('http').createServer(app);
const io = require('socket.io').listen((server));

// Definindo oque o socket.io irá ouvir
app.use(express.static(path.join(__dirname, 'public')));
// Definindo diretorios da views.
app.set('views', path.join(__dirname, 'public'));
// Configurar o node para aceitar "html" como template padrão
app.engine('html', require('ejs').renderFile);

app.set('view engine', 'html');


// Definindo rotas


app.use('/', (req, res) => {
  res.render('index.html');
});

// Conexão do socket
io.on('connection', (socket) => {
  console.log('conectado');
  console.log(`Id da conexão ${socket.id}`);
});
// Definindo porta

server.listen(3000, () => {
  console.log('listening on *:3000');
});