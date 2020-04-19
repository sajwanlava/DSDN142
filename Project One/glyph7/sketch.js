function setup() {
  createCanvas(600, 600);
  background(184, 80, 68);
  spin(width / 2, height / 2);
  //spin(0, 0);
  spin(50, 50);
  spin(-50, 50);
  spin(-50, -50);

}

function draw() {}

function spin(middleX, middleY) {
  // Set colors
  //push();
  fill(255, 134, 120, 127);
  noStroke();


  // A design for a simple flower
  translate(middleX, middleY);

  for (var i = 0; i < 10; i++) {
    ellipse(30, 0, 20, 80);
    rotate(PI / 5);
  }
  //pop();
}