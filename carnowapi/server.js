// Configuring the database
const dbConfig = require('./api/config/config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.set('useUnifiedTopology', true);
// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    // console.log("Successfully connected to the database");    
}).catch(err => {
    // console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});



const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

// create express app
const app = express();
app.use(cors());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a simple route
var routes = require('./api/routes/routes'); //importing route
routes(app); //register the route


// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});