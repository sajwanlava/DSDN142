var tilesX = 50;
var tilesY = 50;

var tileWidth = 100; //change this to match the width of your symbol
var tileHeight = 100; //change this to match the height of your symbol

var rowOffset = 0; // this will change the offset of every second row

function setup() {
  createCanvas(1000, 1000);

  // change this to make your pattern bigger or smaller
  //a number less than 1 will make it smaller (0.5 is half the size)
  //a number bigger than 1 will make it bigger (2 will make it twice as big)
  scale(0.5);

  //change the numbers to make it fill up the screen if it isn't
  for (var i = -10; i < tilesX; ++i) {
    for (var j = -10; j < tilesY; ++j) {

      //rename the title of the function to the name of one of your symbol/glyph functions.
      //don't worry about the sillybusiness going on in the brackets for now, 
      //that's my gift to you ;)
      spin(i * tileWidth + (j % 2 == 0 ? rowOffset : 0), j * tileHeight);

    }
  }

}

function draw() {


}

function spin(middleX, middleY) {
  // Set colors
  push();
  fill(255, 134, 120, 127);
  noStroke();


  // A design for a simple flower
  translate(middleX, middleY);

  for (var i = 0; i < 10; i++) {
    ellipse(30, 0, 20, 80);
    rotate(PI / 5);
  }
  pop();
}