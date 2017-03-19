// SERVER

// requires and globals
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var port = (5000);
var index = require('./modules/index.js');
var mathOperations = require('./modules/mathOperations.js');

// uses
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded( {extended: true} ));
app.use('/', index);
app.use('/mathOperations', mathOperations);

// spin up server
app.listen(port, function(){
  console.log('server up on:', port);
});


// start math operations here then move to mathOperations.js
// commit before moving
