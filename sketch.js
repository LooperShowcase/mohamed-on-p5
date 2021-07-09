let bg;
let y = 0;

function setup() {
  // The size of our starting canvas: 400px width, 400px height
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  let seconds=second();
  let minutes= minute();
  let hours= hour();
  // The same as doing: background(220); or --> background(220,220,220);
  background(0);
noFill();
strokeWeight(8);
translate(width/2,height/2);
rotate(-90);
//seconds
 stroke(6,214,160);
 let secArc=map(seconds,0,60,0,360);
 stroke(239,71,111);

 //minutes
 stroke(255,209,102);
 let minArc =map(minutes,0,60,0,360);

 //hours
 stroke(239,71,111);
 let hArc=map(hours%12,0,12,0,360);
 

 push();
 stroke(255,0,0)
 rotate(secArc);
 line(0,0,150,0);
 pop();

 push();
 stroke(255,0,0)
 rotate(minArc);
 line(0,0,100,0);
pop();

push();
stroke(255,0,0)
rotate(hArc);
line(0,0,80,0);
pop();
  
rotate(90);
strokeWeight(1);
stroke(255,0,0)
textSize(20)
text(12, -10, -160);
text(6, -9, 172);
text(3,160,0)
text(9,-165,0)
text(1,100,-135)
text(11,-100,-140) 
text(2,147,-80)
text(10,-150,-85)
text(4,140,95)
text(8,-140,90)
text(5,90,150)
text(7,-90,150)
fill(225, 255, 0)
text ("BOSS",-25,-100)

  
  
}
