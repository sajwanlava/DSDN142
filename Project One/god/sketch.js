function setup() {
  createCanvas(600, 600);
  background(184, 80, 68);
  spin(width / 2, height / 2);
  //spin(0, 0);
  //spin(50, 50);
  //spin(-50, 50);
  //spin(-50, -50);
  saveCanvas("help", ".png");
}

function draw() {}

function spin(middleX, middleY) {
  // Set colors
  //push();
  fill(255, 134, 120, 127);
  noStroke();


  // A design for a simple flower
  translate(middleX, middleY);
  scale(3);

  for (var i = 0; i < 20; i++) {
    ellipse(30, 0, 20, 80);
    rotate(PI / 5);
  }
  //pop();
}