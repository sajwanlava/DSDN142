function setup() {
  createCanvas(600, 600);
  background(238, 217, 186);
  fill(150, 154, 127, 127);
  noStroke();
  spinOne(width / 2, height / 2);
  spinTwo(0, height / 3);

}

function draw() {}

function spinOne(middleX, middleY) {
  translate(middleX, middleY);
  for (var i = 0; i < 10; i++) {
    ellipse(30, 30, 20, 80);
    rotate(PI / 5);
  }
}

function spinTwo(middleX, middleY) {
  // A design for a simple flower
  translate(middleX, middleY);
  for (var i = 0; i < 10; i++) {
    ellipse(30, 30, 20, 80);
    rotate(PI / 5);
  }
}