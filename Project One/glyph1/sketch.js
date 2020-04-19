function setup() {
  createCanvas(600, 600);
  background(167, 160, 180);
  noFill();
  circles(50, 40);
  saveCanvas("nails", ".png");
}

function draw() {

}

function circles(circle, circleTwo) {
  scale(1);
  stroke(255, 181, 230);
  //strokeWeight(1);
  for (var i = 25; i < width; i += circle) {
    for (var j = 25; j < height; j += circle * 2) {
      ellipse(i, j, circle, circle);
    }
  }

  for (var i = 0; i < width + circle / 2; i += circle) {
    for (var j = 25 + circle; j < height; j += circle * 2) {
      ellipse(i, j, circle, circle);
    }
  }

  stroke(230, 218, 181);
  strokeWeight(1);
  for (var i = 30; i < 600; i += circleTwo) {
    for (var j = 30; j < 600; j += circleTwo * 2) {
      ellipse(i, j, circleTwo, circleTwo);
    }
  }

  for (var i = 5; i < 600 + circleTwo / 2; i += circleTwo) {
    for (var j = 30 + circleTwo; j < 600; j += circleTwo * 2) {
      ellipse(i, j, circleTwo, circleTwo);
    }
  }
}


//var circle = 50;
//var circleTwo = 40;