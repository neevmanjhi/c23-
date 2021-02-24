const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    
   box1 = new Box(200,100,50,50);
   box2 = new Box(220,50,50,100);

   ground=new Ground(200,height,400,20)

    console.log(box1);
    console.log(box2);

   // console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    
    box1.display();
    box2.display();
    ground.display();
}