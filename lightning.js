class Lightning {
    constructor(x,y,radius){

        var options = {
            isStatic : true
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = 10;
        this.Visibility=255
        this.image = loadImage("image/lightning.png") 
        World.add(world,this.body);
    }
    display(){
        if(frameCount % 12 === 0){
        var pos = this.body.position;
        image(this.image,pos.x,pos.y-80,this.image.height/2,this.image.width/2)
        push();
        noStroke();
        pop()
    }
    else{
        World.remove(world,this.body);
         push ();
        this.Visibility=this.Visibility-5; 
      tint (255,this.Visibility);
        pop ();
    }
}
}