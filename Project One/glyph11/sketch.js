function setup() {
  createCanvas(600, 600);
  background(10, 24, 72);
  drawMoon();
  saveCanvas("moon", ".png");
}

function draw() {}

function drawMoon() {

  noStroke();
  var offset = 80;
  for (var i = 5; i > 0; i--) {
    fill(227, 245, 255, 255 - (50 * i));
    ellipse(width / 2, height / 2, i * offset, i * offset);
    offset += 10;
  }
  fill(227, 245, 255);
  ellipse(width / 2, height / 2, offset, offset);
}