const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Rendes = Matter.Render;

drops = [];
lightning = [];
//maxDrops = 100
//function preload(){
    
//}

function setup(){
  createCanvas(600,750) 
  engine = Engine.create();
  world = engine.world;
  umbrella = new Umbrella(300,700,280);

  for (i = 0; i < 0 ;i++){

    x =  random(1,750);
 
    drops[i] = new Drop(x, 10, 10);
  
  }

  Engine.run(engine);
}

function draw(){
    background(36,92,130)
    Engine.update(engine);
    umbrella.display();

    
    for (i = 0; i < drops.length; i++){
      drops[i].display();
    }
      
    if(frameCount % 1 === 0){
      x = random(1,750) 
      drops.push(new Drop(x,10,10));
   }
   
   for (i = 0; i < lightning.length; i++){
    lightning[i].display();
  }
  
   if(frameCount % 40 === 0){
    x = random(1,750) 
    lightning.push(new Lightning(x,10,10));
    lightning.show = false;
             
 }
 

   

}   

