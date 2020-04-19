var sizeS = 150;
var side = false;
var count = 0;
var leave = false;
var delay = 0;

var SECp1x = 48;
var SECp1y = 131;
var SECp2x = 61;
var SECp2y = 45;
var SECp3x = 37;
var SECp3y = 181;
var SECp4x = 154;
var SECp4y = 113;
var SECp5x = 70;
var SECp5y = 67;
var SECp6y = 100;

var p1x = sizeS / 2;
var p1y = 0;
var p2x = sizeS;
var p2y = 0;
var p3x = sizeS;
var p3y = sizeS / 2;
var p4x = sizeS;
var p4y = sizeS;
var p5x = sizeS / 2;
var p5y = sizeS;
var p6y = sizeS;


function setup() {
  createCanvas(600, 600);
  strokeWeight(1.5);
  stroke(255);
  noFill();
  smooth();
  angleMode(DEGREES);
}

function draw() {

  if (count < 20) {

    frameRate(10);
    if (!side) {
      translate(width / 2 - sizeS / 2, height / 2 - sizeS / 2);
      side = true;


    } else {
      translate(width / 2 - sizeS / 2.1, height / 2 - sizeS / 2);
      side = false;

    }
    background(0);
    beginShape();
    vertex(0, 0);
    vertex(p1x, p1y);
    vertex(p2x, p2y);
    vertex(p3x, p3y);
    vertex(p4x, p4y);
    vertex(p5x, p5y);
    vertex(0, p6y);
    endShape(CLOSE);

    count++;

  } else if (count == 20) {
    if (delay < 5) {
      delay += 0.5;
    } else if (delay == 5) {
      background(0);
      secondPart();
      count++;
      delay = 0;
    }

  } else if (count > 20) {
    if (delay < 5) {
      delay += 0.5;
    } else if (delay == 5) {
      thirdPart();
    }
  }

  saveCanvas("test1" + frameCount, "png");
}

function secondPart() {
  translate(width / 2 - sizeS / 2.1, height / 2 - sizeS / 2);
  frameRate(5);
  //rotate(radians(frameCount));
  //while ()
  beginShape();
  vertex(0, 0);
  vertex(SECp1x, SECp1y);
  vertex(SECp2x, SECp2y);
  vertex(SECp3x, SECp3y);
  vertex(SECp4x, SECp4y);
  vertex(SECp5x, SECp5y);
  vertex(0, SECp6y);
  endShape(CLOSE);

  //remove();
}

function thirdPart() {

  translate(width / 2 - sizeS / 2.1, height / 2 - sizeS / 2);
  while (leave === false) {

    background(0);

    beginShape();
    vertex(0, 0);
    vertex(SECp1x, SECp1y);
    vertex(SECp2x, SECp2y);
    vertex(SECp3x, SECp3y);
    vertex(SECp4x, SECp4y);
    vertex(SECp5x, SECp5y);
    vertex(0, SECp6y);
    endShape(CLOSE);

    if (SECp1x === 0 && SECp1y === 0 && SECp2x === 0 && SECp2y === 0 && SECp3x === 0 && SECp3y === 0 && SECp4x === 0 && SECp4y === 0 && SECp5x === 0 && SECp5y === 0 && SECp6y === 0) {
      leave = true;
    }

    if (SECp1x > 0) {
      SECp1x--;
    }
    if (SECp1y > 0) {
      SECp1y--;
    }
    if (SECp2x > 0) {
      SECp2x--;
    }
    if (SECp2y > 0) {
      SECp2y--;
    }
    if (SECp3x > 0) {
      SECp3x--;
    }
    if (SECp3y > 0) {
      SECp3y--;
    }
    if (SECp4x > 0) {
      SECp4x--;
    }
    if (SECp4y > 0) {
      SECp4y--;
    }
    if (SECp5x > 0) {
      SECp5x--;
    }
    if (SECp5y > 0) {
      SECp5y--;
    }
    if (SECp6y > 0) {
      SECp6y--;
    }


  }

}