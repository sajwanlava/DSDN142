var squ = 10;
//var circle = 10;

function setup() {
  createCanvas(600, 600);
  squareDot(1);
  saveCanvas("hand", ".png");
}

function draw() {}

function squareDot(circle) {
  strokeWeight(0.2);
  for (var i = 0; i <= width; i += squ) {
    for (var j = 0; j <= height; j += squ) {
      //fill(204, 144, 101)
      fill(209, 176, 151);
      rect(i, j, squ, squ);
      fill(0, 0, 0, 127);
      ellipse(i + 5, j + 5, circle, circle);

    }
  }
}