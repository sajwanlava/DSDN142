var x = 0;

function setup() { //automatically runs once when the button is played
  createCanvas(600, 600);
}

function draw() { //loops automatically without
  background(255);

  line(x, 0, x, height );
  x += 2; //make number lower to go slower

}