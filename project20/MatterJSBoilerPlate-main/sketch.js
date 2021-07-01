var ground,p1,p2,r1,r2,r3,b1,b2,b3,b4,b5,b6,a1=60,a2=60,a3=60


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(550, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var options={
	isStatic:true
}
ground=Bodies.rectangle(300,570,700,20,options)
p1=Bodies.rectangle(100,400,150,20,options)
p2=Bodies.rectangle(400,400,150,20,options)
World.add(world,ground)
World.add(world,p1)
World.add(world,p2)
	Engine.run(engine);
  b1=Bodies.circle(220,10,10)
  World.add(world,b1)
  rectMode(CENTER)
  ellipseMode(RADIUS)
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect(ground.position.x,ground.position.y,700,20)
  rect(p1.position.x,p1.position.y,150,20)
  rect(p2.position.x,p2.position.y,150,20)
  ellipse(b1.position.x,b1.position.y,10,10)
  drawSprites();
 
}



