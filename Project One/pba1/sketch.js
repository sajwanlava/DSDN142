var circle = 50;

function setup() {
  createCanvas(400, 400);
  //noLoop();
}

function draw() {
  for (var i = 25; i < 400; i = i + circle) {
    for (var j = 25; j < 400; j = j + circle * 2) {
      ellipse(i, j, circle, circle);
    }
  }

  for (var i = 0; i < 400 + circle / 2; i = i + circle) {
    for (var j = 25 + circle; j < 400; j = j + circle * 2) {
      ellipse(i, j, circle, circle);
    }
  }
}