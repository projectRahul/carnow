'use strict';
var mongoose = require('mongoose'),
Fuel = require('./../models/fueltypeModel');

exports.getfueltype = function(req, res) {

	Fuel.distinct("fuel_type").then(function(fuel_data) {
	    if (fuel_data != '' && fuel_data != null){
			res.json({status : true , message : 'Fuel List','data' : fuel_data.sort()});			
	    }else{      
	      res.json({status : false , message : 'No Records found'});
	    }
	}).catch(function(error){
		res.json({status : false , message : 'No Records Found' , error : error});
	});
};
