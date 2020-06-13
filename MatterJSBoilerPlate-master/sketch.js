
var paper;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);

	var options = {
		bodyA: paper. body,
		bodyB: constraintLog.body,
		stiffness: 0.04,
		length: 10
	}
   var chain = Constraint.create(options);
   World.add(world, chain)
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  constraintLog.display();
  strokeWeight(3);
  line(paper.body.position.x,paper.body.position.y,constraintLog.body.position,x,constraintLog.body.position.y);

  drawSprites();
 
}



