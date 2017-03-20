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
        // display the answer on DOM
        $('.answer').text('Answer:' + response);
        // calculations( response );
      }
    }); // end ajax
  }; // end getCalculations


}); // end doc Ready
