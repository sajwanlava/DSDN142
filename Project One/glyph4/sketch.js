function setup() {
  createCanvas(600, 600);
  background(118, 184, 133);
  squaCircle(width / 2, height / 2);
}

function draw() {

}

function squaCircle(middleX, middleY) {

  translate(middleX, middleY);
  for (var i = 0; i < 8; i++) {
    noStroke();
    fill(161, 44, 50);
    rotate(TWO_PI * i / 8);
    rect(80, 0, 20, 20);
  }

}