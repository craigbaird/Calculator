var objectToSend;

$(document).ready(function(){

  // event listeners for buttons

  // ADD
  $('.addButton').on('click', function(){
    console.log("add button clicked");

    objectToSend = {
      value1: $( '#inputBox1' ).val(),
      value2: $( '#inputBox2' ).val()
    }; //end objectToSend
  // ajax post the object to server
  $.ajax({
    type: 'POST',
    url: '/mathOperations/add',
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

  // SUBTRACT
  $('.subtractButton').on('click', function(){
    console.log("subtract button clicked");

    objectToSend = {
      value1: $( '#inputBox1' ).val(),
      value2: $( '#inputBox2' ).val()
    }; //end objectToSend
  // ajax post the object to server
  $.ajax({
    type: 'POST',
    url: '/mathOperations/subtract',
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

  // MULTIPLY
  $('.multiplyButton').on('click', function(){
    console.log("multiply button clicked");

    objectToSend = {
      value1: $( '#inputBox1' ).val(),
      value2: $( '#inputBox2' ).val()
    }; //end objectToSend
    // ajax post the object to server
  $.ajax({
    type: 'POST',
    url: '/mathOperations/multiply',
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

  // DIVIDE
  $('.divideButton').on('click', function(){
    console.log("divide button clicked");

    objectToSend = {
      value1: $( '#inputBox1' ).val(),
      value2: $( '#inputBox2' ).val()
    }; //end objectToSend
    // ajax post the object to server
  $.ajax({
    type: 'POST',
    url: '/mathOperations/divide',
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

  // Get values back and append to DOM
  var getCalculations = function(){
    console.log( 'in GET mathOperations' );
    // make an ajax get call to /inventory
    $.ajax({
      type: 'GET',
      url: '/mathOperations',
      success: function( response ){
        console.log( 'back from mathOperations with:', response );
        // display the answer on DOM
        $('.answer').text('= ' + response);
        // calculations( response );
      }
    }); // end ajax
  }; // end getCalculations

}); // end doc Ready
