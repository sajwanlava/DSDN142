var x = 0;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);

  line(x, 0, x, height);
  x += 2;

  if (x >= width) {
    x = 0;
  }
}