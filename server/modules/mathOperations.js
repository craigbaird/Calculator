// requires and globals
var express = require( 'express' );
var router = express.Router();
// the array of our inventory
var allTheThings = [];

// routes
router.get( '/', function( req, res ){
  console.log( 'inventory base get' );
  res.send( allTheThings );
}); // end send back all the things

router.post( '/calculate', function( req, res ){
  // called from addItemButton on click

  console.log( 'in mathOperations, route:', req.body );

  // add this item to allTheThings
  allTheThings.push( req.body );
  // send back success
  res.send( 200 );
});

// exports
module.exports = router;
