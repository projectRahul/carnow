'use strict';
// var mongoose = require('mongoose'),
// User = mongoose.model('user');


// /**********************************************************/
module.exports = function(app) {
var user = require('../controllers/userController');

  app.get('/user', user.userlist);

  app.get('/', (req, res) => {
      res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
  });  

};