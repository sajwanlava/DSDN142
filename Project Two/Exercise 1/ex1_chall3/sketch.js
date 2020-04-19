var rad = 0;

function setup() { //automatically runs once when the button is played
  createCanvas(600, 600);
}

function draw() { //loops automatically without
  background(255);

  ellipse(width/2, height/2, rad, rad);
  rad+=5;
}