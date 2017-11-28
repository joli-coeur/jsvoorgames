

function bal(){
  this.y = height;
  this.x = 400;

  this.velocity = 0;
  this.lift = -21;
  this.gravity = 0.6;

  this.show = function(){
    fill(0);
    ellipse(this.x, this.y, 32, 32);
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
