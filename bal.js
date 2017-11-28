var bal;
var player_img;

function setup(){
  createCanvas(1300,600);
  bal = new bal();
  player_img = loadImage("koonkjenmoounster.png");
}

function draw(){
  background(255, 255, 255, 50);
  bal.update();
  bal.show();
 }

 function keyPressed() {
   if (key == ' ') {
     bal.up();

   }
 }
