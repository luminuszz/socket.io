const sqlite3 = require('sqlite3').verbose();

const caminhoDb = '';

const db = new sqlite3.Database(`${caminhoDb}`, (err) => {
  if (err) {
    return console.log(err.message);
  }
  console.log('Banco conectado com sucesso');
});
