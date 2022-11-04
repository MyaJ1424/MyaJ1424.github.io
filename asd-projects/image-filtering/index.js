// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

///////gigit pu//////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here 
  applyFilter();

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
// creating a for loop in order to take the string and return it into an array
function applyFilter(){
  for (var i = 0; i < image.length; i++){
    var row = image[i];
    for(var k = 0; k < row.length; k++){
      var rgbString = row[k];  
      var rbgNumbers = rgbStringToArray(rgbString);
      rbgNumbers[RED] = 255;
      rgbString = rgbArrayToString(rbgNumbers);
      row[k] = rgbString;
    }
  } 
}

// TODO 7: Create the applyFilterNoBackground function


// TODO 5: Create the keepInBounds function


// TODO 3: Create reddify function
//you are here and this will create a filter function fot the 
function reddify(arr){
  arr[
    RED = 200
  ];
}

// TODO 6: Create more filter functions


// CHALLENGE code goes below here
