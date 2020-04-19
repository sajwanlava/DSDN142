var y = 600;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);

  line(0, y, width, y);
  y -= 2;

  if (y < 0) {
    y = height;
  }
}