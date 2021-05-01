
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	 climberImage = loadAnimation("images/Climbingman.gif")
}

function setup() {
	createCanvas(2000, 1200);

    
	engine = Engine.create();
	world = engine.world;

	var climber = createSprite(1000,800)
 climber.addAnimation("climbing",climberImage)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



