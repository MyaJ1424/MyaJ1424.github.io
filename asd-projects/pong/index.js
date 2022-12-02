/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()

function runProgram() {
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  const FRAME_RATE = 60;
  const FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;

  // Game Item Objects
  var gameItem = {};
  gameItem.x = 0;
  gameItem.y = 10;
  gameItem.width = 20;
  gameItem.height = 80;
  gameItem.speedX = 1;
  gameItem.speedY = 1;
  gameItem.id = "#gameItem";


  // one-time setup
  let interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  // $(document).on('eventType', handleEvent);
  $(document).on('keydown', handleKeyDown);
  $('#errorContainer').text("down down");
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
  

  }

  /* 
  Called in response to events.
  */
  function handleEvent(event) {
    var KEY = {
      ARROWDOWN: 40,
      ARROWUP: 38,
      KEYW: 87,
      S: 83,
    }

    function handleKeyDown(event) {
      $('#errorContainer').text("down down");
      var keycode = event.which;
      console.log(keycode);

      if (event.which === 40) {
        $('#errorContainer').text("down down");
      }
      else if (event.which === 38){
        $('#errorContainer').text("down down");
      }
      else if (event.which === 87){
        $('#errorContainer').text("down down");
      }
      else if(event.which === 83){
        $('#errorContainer').text("down down");

    }

    function handleKeyUp(event){
      if(event.which === 40){
        $('#errorContainer').text("down down");
    }
    else if(event.which === 38){
      $('#errorContainer').text("down down");
    }
    else if(event.which === 87){
      $('#errorContainer').text("down down");
    }
    else if(event.which === 83){
      $('#errorContainer').text("down down");
    }
  }


  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////


  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  }
}
}
