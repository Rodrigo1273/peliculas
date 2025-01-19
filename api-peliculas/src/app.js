const express = require('express');
const filmsRoutes = require('./routes/filmsRoutes');

const app = express();
app.use(express.json());

// Ruta de bienvenida
app.get('/', (req, res) => {
  res.send('Bienvenido a la API de Películas. Visita /films para interactuar con la API.');
});

// Rutas para las películas
app.use('/films', filmsRoutes);

module.exports = app;

