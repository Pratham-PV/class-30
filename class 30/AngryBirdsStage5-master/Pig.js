class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visiblity=255;
    //colour or transparency is often measured between 0-255
  }

  display(){
    console.log(this.body.speed);
    //pig must disappear when its speed crosses a treshold speed of 3m/s
    if(this.body.speed<3){
      super.display();
    }
    else{
      World.remove(world,this.body);
      // make the image disappear slowly
      push();
      this.Visiblity=this.Visiblity-5;
      tint(255,this.Visiblity);
      image(this.image,this.body.position.x,this.body.position.y,50,50);
      pop();
    }
    
  }

};