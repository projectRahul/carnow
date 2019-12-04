'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  name: {type: String,default: ''},
  mobile: {type: String,default: ''},
  email: {type: String,default: ''},
  password: {type: String,default: ''},
  user_type: {type: String,default: '1'},
  status: {type: Number,default: '1'},
  is_google_user: {type: Number,default: '0'},
});

module.exports = mongoose.model('user', UserSchema);


