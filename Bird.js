class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimg = loadImage("sprites/smoke.png")
    this.trajectory= []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    console.log(this.body.velocity.x);
    console.log(this.body.position.x)
    if(this.body.velocity.x>1 && this.body.position.x>200){

    var position = [this.body.position.x,this.body.position.y]
    this.trajectory.push(position)
    }
    for(var i = 0; i < this.trajectory.length ; i++) {
      image(this.smokeimg,this.trajectory[i][0],this.trajectory[i][1])
    }
  }
  
}
