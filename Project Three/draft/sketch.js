var beenPressed = true;
var r, g, b = 20;
var lastR, lastG, lastB;
var i, j;
var enterTrue = 0;
var four = false;
var sixteen = false;
var noMore = false;
var oke = false;
var randomR1, randomG1, randomB1;
var draw1, draw2, draw3, draw4 = 1;

function setup() {
  createCanvas(1080, 720);
  background(20, 20, 20);
  frameRate(7);
}

function draw() {

  translate(width / 2, height / 2);
  noFill();
  strokeWeight(15);
  stroke(255);
  rect(-150, -150, 300, 300);
  loopedCol();
  //colourThis();
  fill(r, g, b);
  noStroke();
  rect(-150, -150, 300, 300);
  strokeWeight(7);
  stroke(255);



  if (enterTrue == 1) {
    rect(-150, -150, 150, 150);
    //fill(randomR, randomG, randomB);
    rect(0, -150, 150, 150);
    rect(-150, 0, 150, 150);
    rect(0, 0, 150, 150);
  } else if (enterTrue == 2) {
    rect(-150, -150, 75, 75);
    rect(-150, -75, 75, 75);
    rect(-150, 0, 75, 75);
    rect(-150, 75, 75, 75);

    rect(-75, -150, 75, 75);
    rect(-75, -75, 75, 75);
    rect(-75, 0, 75, 75);
    rect(-75, 75, 75, 75);

    rect(0, -150, 75, 75);
    rect(0, -75, 75, 75);
    rect(0, 0, 75, 75);
    rect(0, 75, 75, 75);

    rect(75, -150, 75, 75);
    rect(75, -75, 75, 75);
    rect(75, 0, 75, 75);
    rect(75, 75, 75, 75);
  }
  if (mouseIsPressed) {
    if (four === true) {
      if (mouseX > (width / 2) - 150 && mouseX < width / 2 && mouseY > (height / 2) - 150 && mouseY < height / 2) { //(mouseX > -150 && mouseX < 0 && mouseY > -150 && mouseY < 0) {
        fill(random(255), random(255), random(255));
        rect(-150, -150, 150, 150);

      }
      if (mouseX > width / 2 && mouseX < (width / 2) + 150 && mouseY > (height / 2) - 150 && mouseY < height / 2) {
        fill(random(255), random(255), random(255));
        rect(0, -150, 150, 150);

      }
      if (mouseX > (width / 2) - 150 && mouseX < width / 2 && mouseY > height / 2 && mouseY < (height / 2) + 150) {
        fill(random(255), random(255), random(255));
        rect(-150, 0, 150, 150);
      }
      if (mouseX > width / 2 && mouseX < (width / 2) + 150 && mouseY > height / 2 && mouseY < (height / 2) + 150) {
        fill(random(255), random(255), random(255));
        rect(0, 0, 150, 150);
      }
    }
    if (sixteen === true) {
      if (mouseX > (width / 2) - 150 && mouseX < (width / 2) - 75 && mouseY > (height / 2) - 150 && mouseY < (height / 2) - 75) {
        fill(random(255), random(255), random(255));
        rect(-150, -150, 75, 75);
      }
      if (mouseX > (width / 2) - 150 && mouseX < (width / 2) - 75 && mouseY > (height / 2) - 75 && mouseY < height / 2) {
        fill(random(255), random(255), random(255));
        rect(-150, -75, 75, 75);
      }
      if (mouseX > (width / 2) - 150 && mouseX < (width / 2) - 75 && mouseY > height / 2 && mouseY < (height / 2) + 75) {
        fill(random(255), random(255), random(255));
        rect(-150, 0, 75, 75);
      }
      if (mouseX > (width / 2) - 150 && mouseX < (width / 2) - 75 && mouseY > (height / 2) + 75 && mouseY < (height / 2) + 150) {
        fill(random(255), random(255), random(255));
        rect(-150, 75, 75, 75);
      }
      if (mouseX > (width / 2) - 75 && mouseX < width / 2 && mouseY > (height / 2) - 150 && mouseY < (height / 2) - 75) {
        fill(random(255), random(255), random(255));
        rect(-75, -150, 75, 75);
      }
      if (mouseX > (width / 2) - 75 && mouseX < width / 2 && mouseY > (height / 2) - 75 && mouseY < height / 2) {
        fill(random(255), random(255), random(255));
        rect(-75, -75, 75, 75);
      }
      if (mouseX > (width / 2) - 75 && mouseX < width / 2 && mouseY > height / 2 && mouseY < (height / 2) + 75) {
        fill(random(255), random(255), random(255));
        rect(-75, 0, 75, 75);
      }
      if (mouseX > (width / 2) - 75 && mouseX < width / 2 && mouseY > (height / 2) + 75 && mouseY < (height / 2) + 150) {
        fill(random(255), random(255), random(255));
        rect(-75, 75, 75, 75);
      }
      if (mouseX > width / 2 && mouseX < (width / 2) + 75 && mouseY > (height / 2) - 150 && mouseY < (height / 2) - 75) {
        fill(random(255), random(255), random(255));
        rect(0, -150, 75, 75);
      }
      if (mouseX > width / 2 && mouseX < (width / 2) + 75 && mouseY > (height / 2) - 75 && mouseY < height / 2) {
        fill(random(255), random(255), random(255));
        rect(0, -75, 75, 75);
      }
      if (mouseX > width / 2 && mouseX < (width / 2) + 75 && mouseY > height / 2 && mouseY < (height / 2) + 75) {
        fill(random(255), random(255), random(255));
        rect(0, 0, 75, 75);
      }
      if (mouseX > width / 2 && mouseX < (width / 2) + 75 && mouseY > (height / 2) + 75 && mouseY < (height / 2) + 150) {
        fill(random(255), random(255), random(255));
        rect(0, 75, 75, 75);
      }
      if (mouseX > (width / 2) + 75 && mouseX < (width / 2) + 150 && mouseY > (height / 2) - 150 && mouseY < (height / 2) - 75) {
        fill(random(255), random(255), random(255));
        rect(75, -150, 75, 75);
      }
      if (mouseX > (width / 2) + 75 && mouseX < (width / 2) + 150 && mouseY > (height / 2) - 75 && mouseY < height / 2) {
        fill(random(255), random(255), random(255));
        rect(75, -75, 75, 75);
      }
      if (mouseX > (width / 2) + 75 && mouseX < (width / 2) + 150 && mouseY > height / 2 && mouseY < (height / 2) + 75) {
        fill(random(255), random(255), random(255));
        rect(75, 0, 75, 75);
      }
      if (mouseX > (width / 2) + 75 && mouseX < (width / 2) + 150 && mouseY > (height / 2) + 75 && mouseY < (height / 2) + 150) {
        fill(random(255), random(255), random(255));
        rect(75, 75, 75, 75);
      }
    }
  }
}

function keyPressed() {
  /* if (keyCode === ENTER) {
     r = 20;
     g = 20;
     b = 20;
   } else {
     loopedCol();
   }*/
  if (keyCode === ENTER) {
    enterTrue = 1;
    four = true;
    sixteen = false;
    noMore = true;
  }
  if (keyCode === SHIFT) {
    enterTrue = 2;
    sixteen = true;
    four = false;
    noMore = true;
  }
}

function colourThis() {

}

function mousePressed() {
  if (noMore === false) {
    if (mouseX <= (width / 2) + 150 && mouseX >= (width / 2) - 150 && mouseY <= (height / 2) + 150 && mouseY >= (height / 2) - 150) {
      beenPressed = false;
    }
  }
  //colourThis();
}



function loopedCol() {
  if (noMore === false) {
    if (beenPressed === true && mouseX <= (width / 2) + 150 && mouseX >= (width / 2) - 150 && mouseY <= (height / 2) + 150 && mouseY >= (height / 2) - 150) {
      r = random(255);
      g = random(255);
      b = random(255);
      lastR = r;
      lastG = g;
      lastB = b;
    } else if (beenPressed === false && mouseX <= (width / 2) + 150 && mouseX >= (width / 2) - 150 && mouseY <= (height / 2) + 150 && mouseY >= (height / 2) - 150) {
      r = lastR;
      g = lastG;
      b = lastB;
      oke = true;
    } else {
      r = 20;
      g = 20;
      b = 20;
    }
  }
}



/*var d = dist(mouseX, mouseY, 150, 150);
  if (d > 150 && d < 300) {
    inSquare = true;
  }

  /*if (-145 < mouseX < 145 && -145 < mouseY < 145) {
    inSquare = true;
  }//
  else {
    inSquare = false;
  }
  fillSquare();


  strokeWeight(0);
  fill(r, g, b);
  rect(-150, -150, 300, 300);
}

function mouseClicked() {

  if (count == 1) {
    patternOne(0);
  } else if (count == 2) {
    patternTwo();
  } else if (count == 3) {
    patternThree();
  }

  if (count != 3) {
    count++;
  } else {
    count = 1;
  }

}

function patternOne() {
  if (r === 0 && g === 0 && b === 0) {
    stroke(random(255), random(255), random(255));
  } else if (r !== 0 && g !== 0 && b !== 0) {
    stroke(255);
  }
  strokeWeight(5);
  for (var i = -150; i <= 150; i = i + 60) {
    line(-150, i, 150, i);
  }
}

function patternTwo() {
  if (r === 0 && g === 0 && b === 0) {
    stroke(random(255), random(255), random(255));
  } else if (r !== 0 && g !== 0 && b !== 0) {
    stroke(255);
  }
  strokeWeight(5);
  for (var j = -150; j <= 150; j = j + 60) {
    line(j, -150, j, 150);
  }
}

function patternThree() {
  if (r === 0 && g === 0 && b === 0) {
    stroke(random(255), random(255), random(255));
  } else if (r !== 0 && g !== 0 && b !== 0) {
    stroke(255);
  }
  strokeWeight(5);
  for (var k = -150; k <= 150; k = k + 60) {
    line(-150, k, 150, k);
  }
  for (var l = -150; l <= 150; l = l + 60) {
    line(l, -150, l, 150);
  }
}

function fillSquare() {
  if (inSquare === true) {
    r = random(255);
    g = random(255);
    b = random(255);
  } else {
    r = 20;
    g = 20;
    b = 20;
  }
}*/