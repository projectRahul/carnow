'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CitySchema = new Schema({
  state: {type: String,default: ''},
  city: {type: String,default: ''},
});

module.exports = mongoose.model('citie', CitySchema);


