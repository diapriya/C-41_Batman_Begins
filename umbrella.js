class Umbrella {
    constructor(x,y,radius){
        var option = {
            isStatic : true
        }
        this.body = Bodies.circle(x,y,radius,option)
        this.radius = radius;
        this.image = loadImage("image/umbrella.png");
        World.add(world,this.body);

    }
display(){
    var pos = this.body.position;
    image(this.image, pos.x-200,pos.y-340,this.image.width * 0.8,this.image.height *0.8);
    //ellipseMode(RADIUS);
    //ellipse(pos.x,pos.y,this.radius);
}
}