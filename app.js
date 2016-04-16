var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/beers');

var Beer = require("./BeerModel");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.get('/beers', function (req, res) {
  Beer.find(function (error, beers) {
    res.send(beers);
  });
});

app.post('/beers', function (req, res, next) {
  var beer = new Beer(req.body);

  var body = [];

  req.on('data', function(chunk) {
    body.push(chunk);
  });

  console.log(body);

  beer.save(function(err, beer) {
    if (err) { return next(err); }

    res.json(beer);
  });
});

app.put('/beers/:id',  function(req, res, next) {
  Beer.findById(req.params.id, function (error, beer) {
    beer.name = req.body.name;

    beer.save(function(err, beer) {
      if (err) { return next(err); } 

      res.json(beer);
    });
  });
});

app.delete('/beers/:id', function (req, res) {
  Beer.findById(req.params.id, function (error, beer) {
    if (error) {
      res.status(500);
      res.send(error);
    } else {
      beer.remove();
      res.status(204);
      res.end();
    }
  });
});

app.listen(8000);