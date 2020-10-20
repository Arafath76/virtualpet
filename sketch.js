const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var Dog;


function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    dog= new Dog(200,200);

}

function draw(){
  
    Engine.update(engine);
    dog.display();
    drawSprites();
}


