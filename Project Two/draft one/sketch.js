var x = 250;
var y = 0; //start positions
var vy = 0;
var gravity = 0.98; //gravity that the ball experiences
var bounce = -1; //bounces opposite to the direction


function setup() {
  createCanvas(500, 500);
  smooth();
  stroke(255);
  noFill();
}

function draw() {
  background(0);

  vy += gravity;
  y += vy;
  if (y > height - 15) {
    vy *= bounce;
  }


  rect(x, y, 30, 30);
}