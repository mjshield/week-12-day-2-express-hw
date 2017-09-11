//since we don't have a database we'll use our front end models at the moment

var express = require('express');
var filmRouter = express.Router();

var films = require('../client/src/models/films')();
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');

//Index
filmRouter.get('/', function(req, res) {
  res.json({ data: films});
});

//Show
filmRouter.get('/:id', function(req, res) {
  res.json({ data: films[req.params.id] });
})

//Update
filmRouter.put('/:id', function(req, res) {
  films[req.params.id] = req.body.film;
  res.json({ data: films});
})


//Create
  filmRouter.post('/', function(req, res) {
    console.log(req.body)
    films.push(req.body.film);
    res.json({ data: films });
  });


//Delete


module.exports = filmRouter;