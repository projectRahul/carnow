'use strict';

var mongoose = require('mongoose'),
User = mongoose.model('user');

exports.userlist = function(req, res) {
  User.find(req.body).then(function(user) {
  	res.json({status : false , message : 'Wrong credentials'});
  }).catch(function(error){
  	res.json({status : false , message : 'Wrong Credentials' , error : error});
  });
};