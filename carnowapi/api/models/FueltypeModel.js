'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var FueltypeSchema = new Schema({
  fuel_type: {type: String,default: ''}
});

module.exports = mongoose.model('fueltype', FueltypeSchema);


