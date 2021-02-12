const Engine = Matter.Engine;
const World =  Matter.World;
const Bodies = Matter.Bodies;

var engine, world, object,ball;



function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic: true
  }

  object = Bodies.rectangle(200,390,400,10,options);
  World.add(world,object);

  //console.log(object.position.x);
var ball_options = {
  restitution: 1.0
}

  ball=Bodies.circle(200,200,30,ball_options);
  World.add(world,ball);
  
}

function draw() {
  background(0);  
  Engine.update(engine);
  fill("white");
  rectMode(CENTER);
  rect(object.position.x,object.position.y,400,10);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30,30);
 
}