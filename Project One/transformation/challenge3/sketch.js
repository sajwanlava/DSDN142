function setup() {
  createCanvas(600, 600);
  background(255);
  noLoop();
  angleMode(DEGREES);
}

function draw() {
  translate(width / 2, height / 2);
  for (var i = 1; i < 20; i++) {
    for (var i = 0; i < 10; i++) {
      ellipse(30, 0, 20, 80);
      rotate(PI / 5);
    }
  }
}