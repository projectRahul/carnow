'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CarSchema = new Schema({
  seller_id: {type: String,default: ''},
  color: {type: String,default: ''},
  fuel_type: {type: String,default: ''},
  transmission: {type: String,default: ''},
  vehicle_type: {type: String,default: ''},
  registration_date: {type: String,default: ''},
  ownertype: {type: String,default: ''},
  model: {type: String,default: ''},
  expected_price: {type: String,default: ''},
  negotiable: {type: String,default: ''},
  KMS: {type: String,default: ''},
  maker: {type: String,default: ''},
  engineCC: {type: String,default: ''},
  mileage: {type: String,default: ''},
  city: {type: String,default: ''},
  state: {type: String,default: ''},
  pincode: {type: String,default: ''},
  about: {type: String,default: ''},
  date: {type: String,default: ''},
  time: {type: String,default: ''},
  active_status: {type: Number,default: '0'},
  approved_status: {type: Number,default: '0'},
});

module.exports = mongoose.model('cardetail', CarSchema);


