function setup() {
  createCanvas(1200, 600);
  background(0);
  arch(height, PI, 0);
  arch(430, 0, PI);
}

function draw() {
  //stroke(91, 158, 204);

  stroke(255);
  line(0, 215, width, 215);
  line(0, 240, width, 240);
}

function arch(y, start, end) {
  noStroke();
  for (var i = 25; i < width; i += 50) {
    //fill(255, 139, 88, 127);
    arc(i, y / 2, 50, 50, start, end);
    rect(i - 25, y / 2, 50, 25);
    //fill(91, 158, 204);
    ellipse(i, 257, 10, 10);
  }

}