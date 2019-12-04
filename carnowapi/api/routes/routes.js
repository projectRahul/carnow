'use strict';


var jwt = require('jsonwebtoken');

/**********************************************************/
module.exports = function(app) {
var user = require('../controllers/userController');
var city = require('../controllers/cityController');
var fueltype = require('../controllers/fueltypeController');
var vehicletype = require('../controllers/vehicletypeController');
var modaltype = require('../controllers/modalController');
var cardetail = require('../controllers/carController');


/************Logn/Register*****************/
  app.post('/adduser', user.adduser); 
  app.post('/login', user.login); 

  app.get('/', (req, res) => {
      res.json({"message": "Welcome to Carnow application. Sell Cars quickly."});
  });  

/******************************************/



  app.post('/getstate', verifyToken, city.getstate);
  app.post('/getcity', verifyToken, city.getcity);
  app.post('/getfueltype', verifyToken, fueltype.getfueltype);
  app.post('/getvehicletype', verifyToken, vehicletype.getvehicletype);
  app.post('/getmake', verifyToken, modaltype.getmake);
  app.post('/getmodal', verifyToken, modaltype.getmodal);
  app.post('/addCar', verifyToken, cardetail.addcar);




  // Middleware Verify token
  function verifyToken(req,res,next){
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined'){
      // Extract token
      const bearer = bearerHeader.split(' ');
      const bearerToken = bearer[1];
      //set token
      if(bearerToken != 'null'){
        req.token = bearerToken;
        //Next middleware
        next();
      }else{
        res.json({status : false , message : 'Authorization failed'});
      }
    }else{
      res.json({status : false , message : 'Authorization failed'});
    }
  }



};