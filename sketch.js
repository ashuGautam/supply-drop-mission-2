var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var leftRectSprite;
var centerRectSprite;
var rightRectSprite;

function preload()
{
  	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	rectMode(CENTER);

	leftRectSprite = createSprite(290, 610, 20, 100);
	leftRectSprite.shapeColor=color("red");

	rightRectSprite = createSprite(510,610,20,100);
	rightRectSprite.shapeColor=color("red");
	
	centerRectSprite = createSprite(400,650,200,20);
	centerRectSprite.shapeColor=color("red");

	centerRect = Bodies.rectangle(400, 650, 200, 55, {isStatic:true});
	World.add(world,centerRect);

	leftRect = Bodies.rectangle(290, 610, 20, 100, {isStatic:true});
	World.add(world,leftRect);

	rightRect = Bodies.rectangle(510, 610, 20, 100, {isStatic:true});
	World.add(world,rightRect);

	// leftRectSprite = createSprite(290, 600, 20, 100);
	// centerRectSprite = createSprite(400, 640, 200, 20);
	// rightRectSprite = createSprite(510, 600, 20, 100);

	packageSprite = createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	packageBody = Bodies.circle(width/2, 200, 5, {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	//packageSprite.debug = true;

	helicopterSprite = createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite = createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	
	Engine.run(engine);
}


function draw() {
	Engine.update(engine);

	rectMode(CENTER);
	background(0);

	centerRectSprite.x = centerRect.position.x
	centerRectSprite.y = centerRect.position.y
  	leftRectSprite.x = leftRect.position.x
  	leftRectSprite.y = leftRect.position.y
	rightRectSprite.x = rightRect.position.x
	rightRectSprite.y = rightRect.position.y
	  
  	packageSprite.x= packageBody.position.x 
  	packageSprite.y= packageBody.position.y 

	keyPressed();
	drawSprites();
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
		// Look at the hints in the document and understand how to make the package body fall only on
		Matter.Body.setStatic(packageBody, false);
	}
}