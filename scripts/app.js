'use strict';

$( document ).ready(function whenLoaded(){

  // Your jQuery here
  // 1. Get the value "Hello There".
  var getText = $('#greeting').val();

  // 2. Change (or set) the value to "Hola".
  $('#greeting').text("Hola");

  // 3. Add an h1 to the page that says "A Spanish Greeting".
  $( ".col-sm-6" ).append( "<h1>A Spanish Greeting</h1>" );

  // 4. Add a second greeting ("Que tal?"), in a second column to the right of the first.
  //  sorry, not enough time - ml

  // 5. Add the class "blue" to both greetings.
  
  $( "h1" ).addClass( "blue" );
  $("h1").css("color", "blue");
  $(".blue").css("color", "green");

});
