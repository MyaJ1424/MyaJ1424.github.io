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
function applyFilter(filterFunction){
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
function applyFilterNoBackground(arr){

}

// TODO 5: Create the keepInBounds function
function keepInBounds(num){
  var result1 = Math.max(num , 0);
  var result2 = math.min(result1, 255);
  return result2;
}

// TODO 3: Create reddify function
function reddify(arr){
  arr[RED] = 200;
}
// TODO 6: Create more filter functions
function decreaseBlue(arr){
  var result = arr[BLUE] - 50
  arr[BLUE] = keepInBounds(result);
}

function increasesGreenByBlue(arr){
  var result = arr[GREEN] + arr[BLUE]
  arr[GREEN] = keepInBounds(result);
}

// CHALLENGE code goes below here
