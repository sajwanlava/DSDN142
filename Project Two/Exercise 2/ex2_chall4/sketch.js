var movey = 600;
var movex = 0;

function setup() { //automatically runs once when the button is played
  createCanvas(600, 600);
}

function draw() { //loops automatically without
  background(255);

  ellipse(movex, movey, 20, 20);
  movey -= 2; //make number lower to go slower
  movex += 2;

  if (movey == 0 || movex == width) {
    movey = height;
    movex = 0;
  }
}