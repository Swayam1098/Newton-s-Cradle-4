const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1500,800);

	
	bob1 = new Bob(600,650,40);
	bob2 = new Bob(680,650,40);
	bob3 = new Bob(760,650,40);
	bob4 = new Bob(840,650,40);
	bob5 = new Bob(920,650,40);

	roof = new Roof(760,310,500,30)

	rope1 = new Rope (bob1.body, {x:600,y:325})
	rope2 = new Rope (bob2.body, {x:680,y:325})
	rope3 = new Rope (bob3.body, {x:760,y:325})
	rope4 = new Rope (bob4.body, {x:840,y:325})
	rope5 = new Rope (bob5.body, {x:920,y:325})
	



	engine = Engine.create();
	world = engine.world;


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");

 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 roof.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:45,y:-70})
	}
}


