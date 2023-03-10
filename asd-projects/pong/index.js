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
  $(document).on('keyup', handleKeyUp);


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
      "DOWN": 40,
      "UP": 38,
      "W": 87,
      "S": 83,
    }
  }
  
  function handleKeyDown(event) {
    console.log(handleKeyDown);

    if (event.which === KEY.DOWN) {
      $('#errorContainer').text("down down");
    }
    else if (event.which === KEY.UP){
      $('#errorContainer').text("down down");
    }
    else if (event.which === KEY.W){
      $('#errorContainer').text("down down");
    }
    else if(event.which === KEY.S){
      $('#errorContainer').text("down down");
    }
  }

  function handleKeyUp(event){
    console.log(handleKeyUp);      
    if(event.which === KEY.DOWN){
    
    }
    else if(event.which === KEY.UP){
      $('#errorContainer').text("down down");
    }
    else if(event.which === KEY.W){
      $('#errorContainer').text("down down");
    }
    else if(event.which === KEY.S){
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


