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

  const board_width = $("#gameBoard").width();
  const board_height = $("#gameBoard").height();

  // one-time setup
  let interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
startBall();

  //EVENT LISTENER FUNCTIONS
  $(document).on('keydown', handleKeyDown);
  $(document).on('keyup', handleKeyUp);



  //FACTORY FUNCTION = MAKES OBJECTS
  function gameItem(id) {
    var obj = {};
    obj.id = id;
    obj.y = parseFloat($(id).css("top"));
    obj.x = parseFloat($(id).css("left"));
    obj.width = $(id).width();
    obj.height = $(id).height();
    obj.speedX = 0;
    obj.speedY = 0;
    return obj;
  }

  //GAME OBJECT DECLARATION
  var $paddleRight = gameItem("#rightPaddle");
  var $paddleLeft = gameItem("#leftPaddle");
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
    moveObject($ball);
    wallCollision($paddleRight);
    wallCollision($paddleLeft);
    // wallCollision($ball);
  }




  /* 
  Called in response to events.
  */

  function handleKeyDown(event) {
    if (event.which === KEY.DOWN) {
      $paddleLeft.speedY += 5;
      console.log("KEY DOWN")
    }
    else if (event.which === KEY.UP) {
      $paddleLeft.speedY += -5;
      console.log("KEY UP")
    }
    else if (event.which === KEY.W) {
      $paddleRight.speedY += -5;
      console.log("KEY W")
    }
    else if (event.which === KEY.S) {
      $paddleRight.speedY += 5;
      console.log("KEY S")
    }
  }

  function handleKeyUp(event) {
    if (event.which === KEY.DOWN) {
      $paddleLeft.speedY = 0;
      console.log("KEY DOWN")
    }
    else if (event.which === KEY.UP) {
      $paddleLeft.speedY = 0;
      console.log("KEY UP")
    }
    else if (event.which === KEY.W) {
      $paddleRight.speedY = 0;
      console.log("KEY W")
    }
    else if (event.which === KEY.S) {
      $paddleRight.speedY = 0;
      console.log("KEY S")
    }
  }


  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////// 


  // Game Item Objects
  function wallCollision(obj) {
    //console.log(obj.y, "obj y")

    if (obj.y + obj.height < 0) {
      obj.y = 0 - obj.height
    }
    if (obj.y + obj.height > board_height) {
      obj.y = board_height - obj.height
    }
    if (obj.x + obj.width > board_width) {
      obj.speedX = 0;
    }

    // if (obj.y < 0) {
    //   obj.y = 0;
    // }
    // if (obj.y - obj.height > board_height){
    //   obj.y = board_height - obj.height;
    // }
  }

  function moveObject(obj) {
    obj.x += obj.speedX;
    $(obj.id).css("left", obj.x)
    obj.y += obj.speedY;
    $(obj.id).css("top", obj.y)
  }

  function startBall(obj) {
  $ball.x = Math.random() * 200 + 100;
  $ball.y =  Math.random() * 200 + 100;
  $ball.speedY = (10) *  Math.random() > .5 ? 1 : -1;
  $ball.speedX = (10) *  Math.random() > .5 ? 1 : -1;
  }

  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
}


