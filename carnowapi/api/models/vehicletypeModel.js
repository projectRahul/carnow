'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var VehicletypeSchema = new Schema({
  vehicle_type: {type: String,default: ''}
});

module.exports = mongoose.model('vehicletype', VehicletypeSchema);


