var pulse = true; //when to pulse
var count = 0; //the random value 
var total = 0;

function setup() {
  createCanvas(600, 600);
  //stroke(255);
  scale(1.5);
  ellipseMode(CENTER);
}

function draw() {
  background(185, 80, 68);
  count = random(255);
  total++;

  translate(width / 2, height / 2); //translate to the middle

  stroke(0);
  noFill();
  if (pulse === true && total % 7 === 0) {
    strokeWeight(2 + count / 50);
    colourIt = false;
  } else {
    strokeWeight(3);
    colourIt = true;
  }
  ellipse(0, 0, 300, 300);
  strokeWeight(2);
  ellipse(0, 0, 285, 285);
  //had to start at -3 so it could properly centre
  for (var i = 0; i <= 5; i++) {
    for (var j = 0; j <= 5; j++) {
      translate(i * 5, j * 5); //so each point is staggered
      //https://books.google.co.nz/books?id=iP3GCgAAQBAJ&pg=PT108&lpg=PT108&dq=p5.js+rotate+back+and+forth&source=bl&ots=4ujPadUuyk&sig=tUa3mRJ3JiEhPzTIUNQ3ibG80rw&hl=en&sa=X&ved=0ahUKEwiOt-25zanWAhWJErwKHQJhBh0Q6AEIRDAF#v=onepage&q=p5.js%20rotate%20back%20and%20forth&f=false
      //but also last years cgra 
      rotate(cos(radians((i * j) + frameCount)));
      //draw the flowers
      for (var k = 0; k < 10; k++) {
        strokeWeight(1);
        stroke(255, 134, 120, 127);
        //noStroke();
        //fill(255, 134, 120, 127);
        ellipse(0, 0, 4, 16);
        rotate(PI / 5);
      }
    }
  }
 // saveCanvas("leggo" + frameCount, "png");
}