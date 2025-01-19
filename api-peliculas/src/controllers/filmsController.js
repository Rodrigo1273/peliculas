const films = require('../data/films.json');

exports.getAllFilms = (req, res) => {
  res.json(films);
};

exports.getFilmById = (req, res) => {
  const film = films.find(f => f.id === parseInt(req.params.id));
  if (!film) return res.status(404).send('Película no encontrada.');
  res.json(film);
};

exports.createFilm = (req, res) => {
  const { title, director, genre, rating, year } = req.body;
  const newFilm = {
    id: films.length + 1,
    title,
    director,
    genre,
    rating,
    year,
  };
  films.push(newFilm);
  res.status(201).json(newFilm);
};

exports.updateFilm = (req, res) => {
  const film = films.find(f => f.id === parseInt(req.params.id));
  if (!film) return res.status(404).send('Película no encontrada.');
  const { title, director, genre, rating, year } = req.body;
  if (title) film.title = title;
  if (director) film.director = director;
  if (genre) film.genre = genre;
  if (rating) film.rating = rating;
  if (year) film.year = year;
  res.json(film);
};

exports.deleteFilm = (req, res) => {
  const index = films.findIndex(f => f.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).send('Película no encontrada.');
  const deletedFilm = films.splice(index, 1);
  res.json(deletedFilm);
};
