'use strict';
var mongoose = require('mongoose'),
Modalmaker = require('./../models/modaldetailModel');

exports.getmake = function(req, res) {

	Modalmaker.distinct("brand_name").then(function(brand) {
	    if (brand != '' && brand != null){
			res.json({status : true , message : 'Brand List','data' : brand.sort()});			
	    }else{      
	      res.json({status : false , message : 'No Records found'});
	    }
	}).catch(function(error){
		res.json({status : false , message : 'No Records Found' , error : error});
	});
};

exports.getmodal = function(req, res) {

	Modalmaker.find(req.body,{model_type : 1, _id : 0}).then(function(modal_type) {
	    if (modal_type != '' && modal_type != null){
			res.json({status : true , message : 'Modal List','data' : modal_type.sort()});			
	    }else{      
	      res.json({status : false , message : 'No Records found'});
	    }
	}).catch(function(error){
		res.json({status : false , message : 'No Records Found' , error : error});
	});
};
