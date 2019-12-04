'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ModelSchema = new Schema({
  model_type: {type: String,default: ''},
  brand_name: {type: String,default: ''},
  active_status: {type: Number,default: '0'},
});

module.exports = mongoose.model('modal', ModelSchema);


