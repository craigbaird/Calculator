// requires and globals
var express = require( 'express' );
var router = express.Router();
// the array of our inventory
var allTheThings = [];
var answer;

// routes
router.get( '/', function( req, res ){
  console.log( 'inventory base get' );

  // add();
  res.send( allTheThings);
}); // end send back all the things

router.post( '/calculate', function( req, res ){
  // called from addItemButton on click

  console.log( 'in mathOperations, route:', req.body );

  // add this item to allTheThings
  allTheThings.push( req.body );

  // send back success
  res.send( 200 );
}); // end router.post



  // $('.subtractButton').on('click', function(){
  //   console.log("subtract button clicked");
  //   subtract();
  // });
  //
  // $('.multiplyButton').on('click', function(){
  //   console.log("multiply button clicked");
  //   multiply();
  // });
  // $('.divideButton').on('click', function(){
  //   console.log("divide button clicked");
  //   multiply();
  // });




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
