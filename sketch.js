const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;

var myengine,myworld,ground,ball;
var box1,box2;
var ground2

function setup() {
  createCanvas(800,400);

  myengine=Engine.create();
  myworld=myengine.world;

  box1=new Box(240,100,50,80);
  box2=new Box(200,300,50,50);

  ground2=new grnd (400,400,800,10)

 
  
}

function draw() {
  background(0);
  Engine.update(myengine)
  box1.display();
  box2.display();
  ground2.display();
  
} 