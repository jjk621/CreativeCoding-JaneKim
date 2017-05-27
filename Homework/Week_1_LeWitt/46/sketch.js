function setup() {

  createCanvas(400, 400);
  background(0);
  stroke(225)
  
  strokeWeight(10.0);
  line(100, 0, 100, 20);
  line(100, 80, 100, 400);

  line(200, 0, 200, 120);
  line(200, 180, 200, 400);

  line(300, 0, 300, 220);
  line(300, 280, 300, 400);

  noFill();
  strokeWeight(10.0);
  strokeJoin(BEVEL);

  beginShape();
  vertex(100, 20);
  vertex(120, 50);
  vertex(100, 80);
  endShape();

  beginShape();
  vertex(200, 120);
  vertex(220, 150);
  vertex(200, 180);
  endShape();

  beginShape();
  vertex(300, 220);
  vertex(320, 250);
  vertex(300, 280);
  endShape();

}