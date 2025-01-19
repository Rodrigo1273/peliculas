const express = require('express');
const router = express.Router();
const filmsController = require('../controllers/filmsController');

router.get('/', filmsController.getAllFilms);
router.get('/:id', filmsController.getFilmById);
router.post('/', filmsController.createFilm);
router.put('/:id', filmsController.updateFilm);
router.delete('/:id', filmsController.deleteFilm);

module.exports = router;
