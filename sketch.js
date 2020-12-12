var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	




	engine = Engine.create();
	world = engine.world;
	//CREATING PACKAGE AND HELICOPTER
	helicopter = Bodies.rectangle(width/2, 150, 250, 150 , {isStatic:true} );
	packageBody = Bodies.circle(width/2 , 150 , 50 , {restitution:1, isStatic:true});
	World.add(world, packageBody);
	World.add(world,helicopter);

	//Create a Ground

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {

	background(0);
	rect(ground.position.x, ground.position.y, width, 10)
	imageMode(CENTER);
	image(packageIMG, packageBody.position.x, packageBody.position.y, 70,70);
	image(helicopterIMG, helicopter.position.x, helicopter.position.y, 250,150);
	
	
  
  
//image(ground.positon.x, ground.position.y, width, 10);


 
}
//event based function
function keyPressed() {
 if (keyCode === DOWN_ARROW) {

    
  }
}



