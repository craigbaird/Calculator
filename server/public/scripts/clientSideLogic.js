// ajax requests go here; do all as POSTs
// append to DOM
// add click handlers

$(document).ready(function(){

  // event listeners for buttons
  $('.addButton').on('click', function(){
    console.log("add button clicked");

    var objectToSend = {
      value1: $( '#inputBox1' ).val(),
      value2: $( '#inputBox2' ).val()
    }; //end objectToSend
    // ajax post the object to server (/inventory/add)
  $.ajax({
    type: 'POST',
    url: '/mathOperations/calculate',
    data: objectToSend,
    success: function( response ){
      console.log( 'back from calculate with:', response );
      if( response == 'OK' ){
        // update display
        console.log("Received response from MathOperations");
        getCalculations();
      }
      else{
        alert( 'error calculating' );
      }
    } // end success
  }); // end ajax

  }); // end on click

  var getCalculations = function(){
    console.log( 'in GET mathOperations' );
    // make an ajax get call to /inventory
    $.ajax({
      type: 'GET',
      url: '/mathOperations',
      success: function( response ){
        console.log( 'back from mathOperations with:', response );
        // display the inventory on DOM
        calculations( response );
      }
    }); // end ajax
  }; // end getInventory

  var calculations = function(  ){
      console.log( 'in displayInventory');
      // empty output
      // $( '#outputDiv' ).empty();
      // // loop through items
      // for (var i = 0; i < items.length; i++) {
      //   // append them to the outputDiv
      //   $( '#outputDiv' ).append( '<p><b>' + items[i].name + '</b>: ' + items[i].description + '</p>' );
      // } // end for
    }; // end displayInventory









//   $('.subtractButton').on('click', function(){
//     console.log("subtract button clicked");
//     subtract();
//   });
//
//   $('.multiplyButton').on('click', function(){
//     console.log("multiply button clicked");
//     multiply();
//   });
//   $('.divideButton').on('click', function(){
//     console.log("divide button clicked");
//     multiply();
//   });
//
//
//
//
// function add(){
//   result = input1 + input2;
//   $('.result').text("Answer " + result);
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



}); // end doc Ready
