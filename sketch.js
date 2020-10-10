const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new box(600,300,50,50);
    box2 = new box(800,100,50,50);
    log1 = new log(700,50,300,PI/2)
    pig1 = new pig(700,300);
    ground = new Ground(500,height,1000,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    
    box1.display();
    box2.display();
    log1.display();
    ground.display();
    pig1.display();
}