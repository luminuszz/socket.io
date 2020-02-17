const express = require('express');

const routes = express.Router();

// Middleware de log

routes.use('/', (req, res, next) => {
  console.log(`dados:${req.data}`);
  next();
});


// Routes

routes.get('/', (req, res) => {
  res.json({ message: 'conectado' });
});


module.exports = routes;
