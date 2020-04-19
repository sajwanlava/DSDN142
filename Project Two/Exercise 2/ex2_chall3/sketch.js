var rad = 0;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);

  ellipse(width / 2, height / 2, rad, rad);
  rad += 2;

  if (rad > 300) {
    rad = 0;
  }
}