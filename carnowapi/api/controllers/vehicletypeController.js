'use strict';
var mongoose = require('mongoose'),
Vehicle = require('./../models/vehicletypeModel');

exports.getvehicletype = function(req, res) {

	Vehicle.distinct("vehicle_type").then(function(vehicle_data) {
	    if (vehicle_data != '' && vehicle_data != null){
			res.json({status : true , message : 'Vehicle List','data' : vehicle_data.sort()});			
	    }else{      
	      res.json({status : false , message : 'No Records found'});
	    }
	}).catch(function(error){
		res.json({status : false , message : 'No Records Found' , error : error});
	});
};
