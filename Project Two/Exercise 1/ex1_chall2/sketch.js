var y = 0;

function setup() { //automatically runs once when the button is played
  createCanvas(600, 600);
}

function draw() { //loops automatically without
  background(255);

  line(0, y, width, y);
  y += 2; //make number lower to go slower

}