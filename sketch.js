var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var side1, side2, side3;
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
	

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	side1Sprite = createSprite(300, 610, 20, 100);
	side1Sprite.shapeColor = "red";

	side2Sprite = createSprite(390, 650, 200, 20);
	side2Sprite.shapeColor = "red";

	side3Sprite = createSprite(500, 610, 20, 100);
	side3Sprite.shapeColor = "red";


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 100 , 5 , {restitution:0.25, isStatic:false});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	side1 = Bodies.rectangle(300, 610, 50, 100, {isStatic:true});
	World.add(world, side1);

	side2 = Bodies.rectangle(390, 650, 200, 50, {isStatic:true});
	World.add(world, side2);

	side3 = Bodies.rectangle(500, 610, 50, 100, {isStatic:true})
	Engine.run(engine);
	
}

   


function draw() {
	rectMode(CENTER);
	background(0);
	keyPressed();
  
  	drawSprites();
 
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	   
	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y
	   
   
	   
	 }
   }



