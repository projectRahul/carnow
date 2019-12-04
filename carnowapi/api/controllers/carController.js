'use strict';
var jwt = require('jsonwebtoken');
var multer = require('multer');
var fs = require('fs');
var path = require('path');
var watermark = require('image-watermark');

var mongoose = require('mongoose'),
User = require('./../models/cardetailModel');



/*******Image Upload***********/
// var upload = multer({dest:'upload/'});
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    	// console.log(file);
    if(path.extname(file.originalname) == '.jpg'){
      cb(null, 'upload/carimage')
    }else{
      cb(null, 'upload')
    }
  },
  filename: function (req, file, cb) {
      let extArray = file.mimetype.split("/");
    let extension = extArray[extArray.length - 1];
    cb(null, file.fieldname + '-' + Date.now()+ '.' +extension)
  }
}) 
var upload = multer({ storage: storage }).array('images',10);//10 here to accept max number of images
/***********************************************/


exports.addcar = function(req, res) {

	upload(req,res,function(err) {
        //console.log(req.body);
        var options = {
		    'text' : 'sample watermark', 
		    'color' : 'rgb(154, 50, 46)'
		};
   //      for (var i = req.files.length - 1; i >= 0; i--) {
        	
   //      	const imagePath = 'upload/carimage/'+req.files[i].filename;
			// if (fs.existsSync(imagePath)) {
			// 	console.log('ssss');
			//     watermark.embedWatermark(imagePath, options);
			//     // ...
			// }
   //      }
        if(err) {
            return res.end("Error uploading file.");
        }
        res.end("File is uploaded");
    });
	// res.json((req.body.images));
	// var searchArray = new Object();
 //  	searchArray['email'] = req.body.email;

	// var new_user = new User(req.body);
	// User.find(searchArray).then(function(user_data) {
	//     if (user_data == '' || user_data == null){
			
	// 		new_user.save(req.body).then(function(user) {
	// 			res.json({status : true , message : 'User Added'});
	// 		}).catch(function(error){
	// 			res.json({status : false , message : 'Wrong Credentials' , error : error});
	// 		});

	//     }else{      
	//       res.json({status : false , message : 'Records already exists'});
	//     }
	// }).catch(function(error){
	// 	res.json({status : false , message : 'No patient Found' , error : error});
	// });
};
