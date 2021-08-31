const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var ball1,ball2,ball3,ball4,ball5;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}
	var ball_option={
		isStatic:true
	}

	roof = Bodies.rectangle(400,100,330,20,roof_options);
    World.add(world,roof);

	ball1 = Bodies.circle(280,330,50,ball_option);
	World.add(world,ball1)
	ball2 = Bodies.circle(340,330,50,ball_option);
	World.add(world,ball2);
	ball3 = Bodies.circle(400,330,50,ball_option);
	World.add(world,ball3);
	ball4 = Bodies.circle(460,330,50,ball_option);
	World.add(world,ball4);
	ball5 = Bodies.circle(520,330,50,ball_option);
	World.add(world,ball5);

	Engine.run(engine);

  ropes = Matter.Constraint.create({
	bodyA:ball1,
    pointA:{x:550,y:1000},
    bodyB:roof,
    PointB:{x:10000,y:0},
    length:1000
})
World.add(world,ropes);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,330,20);

  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here
  ellipse(ball1.position.x,ball1.position.y,50,50);
  ellipse(ball2.position.x,ball2.position.y,50,50);
  ellipse(ball3.position.x,ball3.position.y,50,50);
  ellipse(ball4.position.x,ball4.position.y,50,50);
  ellipse(ball5.position.x,ball5.position.y,50,50);
  line(ropes.pointA.x,ropes.pointA.y,roof.position.x,roof.position.y)
  line(roof.position.x,roof.position.y,ball1.position.x,ball1.position.y);

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
