function setup() {
  createCanvas(1000,1000);
  background(255);
  lines(100,100);
  lines(200,100);
  lines(300,100);
  lines(400,100);
  lines(500,100);
  lines(600,100);
  lines(700,100);
  lines(800,100);
  lines(900,100);
}

function draw() {
}

function lines(j,circle){
  
  for(var i = 0; i<=1000; i+=circle){
    noStroke();
  fill(232,136,52,127);
    ellipse(i,j,circle,circle);
    fill(204, 101, 192, 127);
    ellipse(i,j,80,80);
    }
    
    //stroke(0);
    fill(204, 101, 192, 127);
    rect(0,j,1000,50);
  
  
}