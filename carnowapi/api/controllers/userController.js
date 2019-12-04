'use strict';
var jwt = require('jsonwebtoken');

var mongoose = require('mongoose'),
User = require('./../models/userModel');

exports.adduser = function(req, res) {

	var searchArray = new Object();
  	searchArray['email'] = req.body.email;

	var new_user = new User(req.body);
	User.find(searchArray).then(function(user_data) {
	    if (user_data == '' || user_data == null){
			
			new_user.save(req.body).then(function(user) {
				res.json({status : true , message : 'User Added'});
			}).catch(function(error){
				res.json({status : false , message : 'Wrong Credentials' , error : error});
			});

	    }else{      
	      res.json({status : false , message : 'Records already exists'});
	    }
	}).catch(function(error){
		res.json({status : false , message : 'No patient Found' , error : error});
	});
};


exports.login = function(req, res) {

	User.find(req.body).then(function(user_data) {
	    if (user_data == '' || user_data == null){
	      res.json({status : false , message : 'Records not found'});
	    }else{

	    	jwt.sign({'user_data':user_data[0]['email']},'secretkey',{ expiresIn: '1h' },(err,token)=>{
		      user_data = user_data.concat({token});
		      res.json({status : true, data : user_data});
		    });

	    	// res.json({status : true , message : 'Credential matched' , data : user_data});
	    }
	}).catch(function(error){
		res.json({status : false , message : 'No user Found' , error : error});
	});
};