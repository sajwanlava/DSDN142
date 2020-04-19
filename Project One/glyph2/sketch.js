var boardLeft = 50; // Top left corner of the board
var boardTop = 50;
var num = 5;
var wide = 70; //70 by 70 circle

function setup() {
  createCanvas(300, 300);
  background(255);
  fill(255, 52, 133, 125);
  stroke(255);
  strokeWeight(0.5);
  cones(0, 0);
}

function draw() {

}

function cones(row, ring) {

  while (row < num) { //when start row is less than num
    var col = 0;
    while (col < num) { // when col
      var x = boardLeft + col * wide; //start x position/top left
      var y = boardTop + row * wide; //start y position/top left
      ellipse(x, y, wide, wide); //draw outer oval
      while (ring <= wide) {
        ellipse(x + ring / 2, y + ring / 2, wide - ring, wide - ring); //draw inner ovals
        ring = ring + 3; //make the inner circle bigger so diameter becomes smaller as in the diam parameters of the draw oval in this loop
      }
      ring = 0; //set ring back to zero
      col++; //next column
    }
    row++; //next row 
  }
}