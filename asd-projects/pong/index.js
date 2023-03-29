/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()

function runProgram() {
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  const FRAME_RATE = 60;
  const FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  const KEY = {
    "DOWN": 40,
    "UP": 38,
    "W": 87,
    "S": 83,
  }

  const board_width = $("#board").width();
  const board_height = $("#board").height();
  // Game Item Objects
  function wallCollision() {
    if (ball.x >= board_width) {
      ball.speedX = -ball.speedX
    }
    else if (ball.y >= board_height) {
      ball.speedY = -ball.speedY
    }
    else if (ball.x >= board_width) {
      ball.speedX = -ball.speedX
    }
    else if (ball.y >= board_height) {
      ball.speedY = -ball.speedY
    }
  }



  // one-time setup
  let interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  //startBall();

  $(document).on('keydown', handleKeyDown);
  $(document).on('keyup', handleKeyUp);


  function gameItem(id) {
    var obj = {};
    obj.id = id;
    obj.x = parseFloat($(id).css("top"));
    obj.y = parseFloat($(id).css("left"));
    obj.width = $(id).width();
    obj.height = $(id).height();
    obj.speedX = 0;
    obj.speedY = 0;
    return obj;
  }

  var $paddleLeft = gameItem("#leftPaddle");
  var $paddleRight = gameItem("#rightPaddle");
  var $ball = gameItem("#ball");

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    moveObject($paddleRight);
    moveObject($paddleLeft);
  }  




  /* 
  Called in response to events.
  */

  function handleKeyDown(event) {
    if (event.which === KEY.DOWN) {
      $paddleLeft.speedX += 5;
      console.log("KEY DOWN")
    }
    else if (event.which === KEY.UP) {
      $paddleLeft.speedX += -5;
      console.log("KEY UP")
    }
    else if (event.which === KEY.W) {
      $paddleRight.speedX += -5;
      console.log("KEY W")
    }
    else if (event.which === KEY.S) {
      $paddleRight.speedX += 5;
      console.log("KEY S")
    }
  }

  function handleKeyUp(event) {
    if (event.which === KEY.DOWN) {
      $paddleLeft.speedX = 0;
      console.log("KEY DOWN")
    }
    else if (event.which === KEY.UP) {
      $paddleLeft.speedX = 0;
      console.log("KEY UP")
    }
    else if (event.which === KEY.W) {
      $paddleRight.speedX = 0;
      console.log("KEY W")
    }
    else if (event.which === KEY.S) {
      $paddleRight.speedX = 0;
      console.log("KEY S")
    }
  }


  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////// 

  function moveObject(obj) {
    obj.x += obj.speedX;
    $(obj.id).css("top", obj.x)
    obj.y += obj.speedY;
    $(obj.id).css("left", obj.y)
  }

  function startBall(ball) {
      
  }
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
}


