var circle = 100;

function setup() {
  createCanvas(400, 400);
  noFill();
  noLoop();
}

function draw() {
  for (var i = 0; i <= 400; i += circle) {
    for (var j = 0; j <= 400; j += circle) {
      ellipse(i, j, circle, circle);
    }
  }

  for (var i = 50; i <= 400; i += circle) {
    for (var j = 50; j <= 400; j += circle) {
      ellipse(i, j, circle, circle);
    }
  }

  for (var i = 50; i <= 400; i += circle) {
    for (var j = 0; j <= 400; j += circle) {
      ellipse(i, j, circle, circle);
    }
  }
}