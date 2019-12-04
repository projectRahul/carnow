'use strict';
var mongoose = require('mongoose'),
City = require('./../models/cityModel');

exports.getstate = function(req, res) {

	City.distinct("state").then(function(state_data) {
	    if (state_data != '' && state_data != null){
			res.json({status : true , message : 'State List','data' : state_data.sort()});			
	    }else{      
	      res.json({status : false , message : 'No Records found'});
	    }
	}).catch(function(error){
		res.json({status : false , message : 'No Records Found' , error : error});
	});
};

exports.getcity = function(req, res) {

	City.find(req.body,{city : 1, _id : 0}).then(function(city_data) {
	    if (city_data != '' && city_data != null){
			res.json({status : true , message : 'City List','data' : city_data.sort()});			
	    }else{      
	      res.json({status : false , message : 'No Records found'});
	    }
	}).catch(function(error){
		res.json({status : false , message : 'No Records Found' , error : error});
	});
};
