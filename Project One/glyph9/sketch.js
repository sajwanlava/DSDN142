var length = 3;

function setup() {
  createCanvas(1000, 1000);
  background(0,255,255);
  noStroke();
  //stroke(0, random(255), random(255));
  //strokeWeight(0.2);
  noLoop();
}

function draw() {
  for (var i = 0; i <= 1000; i += length) {
    for (var j = 0; j <= 1000; j += length) {
      //fill(255,0,0);

      fill(random(255), random(255), random(255));
      ellipse(i, j, length, length);
    }
  }
}