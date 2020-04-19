function setup() {
  createCanvas(500, 500);
  noLoop();
}

function draw() {
  for (var i = 20; i < 500; i += 50) {
    for (var j = 5; j < 500; j += 50) {
      line(i, j, i + 20, j + 20);
    }
  }

  for (var i = 40; i < 500; i += 50) {
    for (var j = 55; j < 500; j += 50) {
      line(i, j, i + 20, j - 20);
    }
  }

}