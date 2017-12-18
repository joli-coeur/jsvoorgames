var speler;
var koekje;
var player_img;
var groente;
var score = 0;
var toestand = "begin";
var vorigeToestand = "";
var toestand2 = "begin2";
var vorigeToestand2 = "";

function setup(){
  createCanvas(1300,600);
  speler = new Bal();
  koekje = new Obstakel(2);
  groente = new Obstakel2(3);
  player_img1 = loadImage("kinker.png");
  player_img = loadImage("koonkjenmoounster.png");
  player_img2 = loadImage("Broccoli.png");

}

function draw(){
  background(255, 255, 255, 50);
  speler.update();
  speler.show();
  koekje.move();
  if (toestand != "botsing") {
    koekje.show();
  }
  koekje.check();
  groente.move();
  if (toestand != "botsing") {
    groente.show();

  }
  groente.check();

  var afstandX = abs(speler.x - koekje.x);
  var afstandY = abs(speler.y - koekje.y);
  var afstandX2 = abs(speler.x - groente.x)
  var afstandY2 = abs(speler.y - groente.y)
  if (afstandX < 32 && afstandY < 32) {
    //botsing gedetecteerd
    toestand = "botsing";
  }

  if (toestand == "botsing" && vorigeToestand == "begin") {
    score += 1;
  }

  if (afstandX2 < 32 && afstandY2 < 32) {
    //botsing gedetecteerd
    toestand2 = "botsing2";
  }

  if (toestand2 == "botsing2" && vorigeToestand2 == begin) {
    score -= 1;
  }

  textSize (32);
  fill(51);
  text("score:" + score + "", 10, 30);

  vorigeToestand = toestand;
  vorigeToestand2 = toestand2
  }


 function keyPressed() {
   if (key == ' ') {
     speler.up();

   }
 }
