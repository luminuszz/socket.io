const express = require('express');

const routes = express.Router();

// Middleware de log

routes.use('/', (req, res, next) => {
  console.log(`dados:${req}`);
  next();
});


// Routes

routes.use('/', (req, res) => {
  res.json({ message: 'conectado' });
});


module.exports = routes;
