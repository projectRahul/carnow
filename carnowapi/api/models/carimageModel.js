'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CarimageSchema = new Schema({
  user_id: {type: String,default: ''},
  car_id: {type: String,default: ''},
  image_path: {type: String,default: ''},
  date: {type: String,default: ''},
  time: {type: String,default: ''}
});

module.exports = mongoose.model('carimage', CarimageSchema);


