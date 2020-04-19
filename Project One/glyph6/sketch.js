var squ = 10;
//var circle = 10;

function setup() {
  createCanvas(400, 400);
  squareDot(5);
}

function draw() {}

function squareDot(circle) {
  for (var i = 0; i <= 400; i += squ) {
    for (var j = 0; j <= 400; j += squ) {
      fill(204, 144, 101);
      rect(i, j, squ, squ);
      fill(0);
      ellipse(i + 5, j + 5, circle, circle);

    }
  }
}