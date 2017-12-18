
function koekie(){
  this.top = random (height/2);
  this.bottom = random (height/2);
  this.x = width;
  this.w = 20;
  this.speed = 5;
  this.show = function (){
      fill(255);
      rect(this.x,0,this.w, this.top);
      rect(this.x, height, this.w, this.bottom);

  }
  this.update = function(){
    this.x -= this.speed;
  }
}
