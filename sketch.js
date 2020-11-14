var packageBody,groundBody
var ball
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;
	
	pac1 = new Thing(950, 375, 200, 10);
	pac2 = new Thing(1050, 340, 10, 100);
	pac3 = new Thing(850, 340, 10, 100);

	ball = new Ahem(270, 360, 20);
	World.add(world, ball);
	
	groundBody = Bodies.rectangle(600, 390, 1200, 20, {isStatic:true});
	World.add(world, groundBody);
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  pac1.display();
  pac2.display();
  pac3.display();
  ball.display();
  rect(groundBody.position.x, groundBody.position.y, 1200, 20);
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(ball.body, ball.body.position, {x: 70, y:-20});
  }
}