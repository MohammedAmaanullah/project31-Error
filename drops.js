class Drops{
    constructor(x,y,radius){
        var options = {
        isStatic: true
        }
    }
    
    this.drop = Bodies.circle(x,y,radius,options);
    this.radius = radius;
    World.add(world,this.drop);
}
    display(){
        var angle = this.body.angle;
        push();
        translate(this.drop.position.x, this.drop.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        ellipse(0,0,this.radius);
        pop();
    }


