function Obstakel2(_xSpeed){
  this.y = Math.floor(Math.random() * 599);
  this.x = 600;
  this.xSpeed = _xSpeed
  this.move = function(){
    this.x -= this.xSpeed;

  }

  this.show = function(){
    fill(0);
    ellipse(this.x, this.y, 15, 20);
    image(player_img2, this.x - 32, this.y - 32, 64, 64);
  }


  this.check = function(){
    if (this.x < 0){
      this.x = 1300;
      this.xSpeed += 0.5;
      toestand = "begin";
    if (this.x = 1300){
      this.y = Math.floor(Math.random() * 599)
    }
    }
  }
}
function Obstakel(_xSpeed){
  this.y = Math.floor(Math.random() * 599);
  this.x = 600;
  this.xSpeed = _xSpeed
  this.move = function(){
    this.x -= this.xSpeed;

  }

  this.show = function(){
    fill(0);
    ellipse(this.x, this.y, 32, 32);
    image(player_img1, this.x - 32, this.y - 32, 64, 64);
  }


  this.check = function(){
    if (this.x < 0){
      this.x = 1300;
      this.xSpeed += 0.5;
      toestand = "begin";
    if (this.x = 1300){
      this.y = Math.floor(Math.random() * 599)
    }
    }
  }
}

function Bal(){
  this.y = height;
  this.x = 400;

  this.velocity = 0;
  this.lift = -21;
  this.gravity = 0.6;

  this.show = function(){
    fill(0);
    ellipse(this.x, this.y, 32, 32,);
    image(player_img, this.x - 32, this.y - 32, 64, 64);
  }
  this.up = function(){
    this.velocity += this.lift;
  }
  this.update = function(){
    this.velocity += this.gravity
    this.velocity *= 0.9;
    this.y += this.velocity;

      if (this.y > height - 32){
          this.y = height - 32;
          this.velocity = 0;
      }

      if (this.y < 32){
          this.y = 32;
          this.velocity = 0;
      }




  }

}
