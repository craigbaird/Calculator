// requires and globals
var express = require( 'express' );
var router = express.Router();
// the array of our inventory
var allTheThings = [];

// routes
router.get( '/', function( req, res ){
  console.log( 'mathOperations base get' );

  res.send( allTheThings);
}); // end send back all the things


router.post( '/add', function( req, res ){
// called from addButton on click

  console.log( 'in mathOperations, route:', req.body );

  // add this item to allTheThings
  allTheThings.push( req.body );

  // send back success
  res.send( 200 );
}); // end router.post


router.post( '/subtract', function( req, res ){
// called from subtractButton on click

  console.log( 'in mathOperations, route:', req.body );

  // add this item to allTheThings
  allTheThings.push( req.body );

  // send back success
  res.send( 200 );
}); // end router.post


router.post( '/multiply', function( req, res ){
// called from multiplyButton on click

  console.log( 'in mathOperations, route:', req.body );

  // add this item to allTheThings
  allTheThings.push( req.body );

  // send back success
  res.send( 200 );
}); // end router.post


router.post( '/divide', function( req, res ){
// called from divide Button on click

  console.log( 'in mathOperations, route:', req.body );

  // add this item to allTheThings
  allTheThings.push( req.body );

  // send back success
  res.send( 200 );
}); // end router.post







// function add(){
//   answer = allTheThings.value1 + allTheThings.value2;
//   return answer;
// }
//
// function subtract(){
//   result = input1 - input2;
//   return result;
// }
//
// function multiply(){
//   result = input1 * input2;
//   return result;
// }
// function divide(){
//   result = input1 / input2;
//   return result;
// }












// exports
module.exports = router;
