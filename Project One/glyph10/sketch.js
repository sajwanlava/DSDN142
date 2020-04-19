function setup() {
  createCanvas(1200, 850);
  // noStroke();
  drawSky();
  saveCanvas("gradient", ".png");

}

function draw() {

}

function drawSky() { // creates sky texture
  var h = 2 * height / 2; // when it should stop fading 
  noStroke();
  fill(144, 96, 144); //lighter colour
  rect(0, 0, width, h);
  var l = height / 255; //helps how much to fade by 
  strokeWeight(3);
  for (var i = 0; i < (h); i++) {
    stroke(10, 24, 72, 255 - (i) / (l)); //darker colour that gradually fades
    line(0, i, width, i); //drawn by lines - not very efficient
  }
}

//got help from Hazel Darney for this code 