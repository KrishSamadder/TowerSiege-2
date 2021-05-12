class Box1 {
  constructor(x, y, width, height) {
    var options = {
      isStatic: false,
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    push();
    if(this.body.speed<3){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("lightblue");
    rect(0, 0, this.width, this.height);
    pop();
  }
  else{
    World.remove(world, this.body);
    tint(255, 126);
  }
  pop();
}
} 