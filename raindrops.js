class Drop {
    constructor(x,y,radius){

        var options = {
            isStatic : false
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = 10
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;

        push();
        noStroke();
        fill("blue")
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius)
        pop()
    }
}