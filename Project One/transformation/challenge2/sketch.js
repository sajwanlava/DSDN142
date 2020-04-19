function setup() {
  createCanvas(600, 600);
  background(255);
  noLoop();
}

function draw() {
  translate(width / 2, height / 2);
  for (var i = 1; i < 100; i+=10) {
    rotate(50+i);
    rect(-150 / 2, -150 / 2, 150, 150);
  }
}