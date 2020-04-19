var tilesX = 50;
var tilesY = 50;

var tileWidth = 100; //change this to match the width of your symbol
var tileHeight = 100; //change this to match the height of your symbol

var rowOffset = 0; // this will change the offset of every second row

function setup() {
  createCanvas(1200, 850);
  drawSky();
  // change this to make your pattern bigger or smaller
  //a number less than 1 will make it smaller (0.5 is half the size)
  //a number bigger than 1 will make it bigger (2 will make it twice as big)
  scale(0.3);

  //change the numbers to make it fill up the screen if it isn't
  for (var i = -10; i < tilesX; ++i) {
    for (var j = -10; j < tilesY; ++j) {

      //rename the title of the function to the name of one of your symbol/glyph functions.
      //don't worry about the sillybusiness going on in the brackets for now, 
      //that's my gift to you ;)
      spin(i * tileWidth + (j % 2 == 0 ? rowOffset : 0), j * tileHeight);

    }
  }
  saveCanvas("second", ".png");
}

function draw() {


}

function spin(middleX, middleY) {
  // Set colors
  push();
  fill(228, 236, 247, 127);
  noStroke();


  // A design for a simple flower
  translate(middleX, middleY);
  translate(middleX, middleY);
  for (var i = 0; i < 10; i++) {
    ellipse(30, 30, 20, 80);
    rotate(PI / 5);
  }
  pop();
}

function drawSky() { // creates sky texture
  var h = 2 * height / 1.5;
  noStroke();
  fill(224, 202, 60);
  rect(0, 0, width, h);
  var l = height / 300;
  strokeWeight(3);
  for (var i = 0; i < (h); i++) {
    stroke(255, 184, 111, 255 - (i) / (l));
    line(0, i, width, i);
  }
}