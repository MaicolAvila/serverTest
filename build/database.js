"use strict";

var db = require('mongoose');

db.connect('mongodb://127.0.0.1:27017/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
var Routes = db.model('Routes', {
  name: string
});
var Rutina = new Routes({
  name: 'Rutinas'
});
Rutina.save().then(function () {
  return console.log('Funciono');
}).error(function (err) {
  return console.log(err);
});