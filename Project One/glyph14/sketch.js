function setup() {
  createCanvas(1200, 850);
  // noStroke();
  drawSky();
  saveCanvas("gradient", ".png");

}

function draw() {

}

function drawSky() { // creates sky texture
  var h = 2 * height / 1.5;
  noStroke();
  fill(224, 202, 60);
  rect(0, 0, width, h);
  var l = height / 250;
  strokeWeight(3);
  for (var i = 0; i < (h); i++) {
    stroke(255, 184, 111, 255 - (i) / (l));
    line(0, i, width, i);
  }
}