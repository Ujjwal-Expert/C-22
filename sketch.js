const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEng, myWorld,myObj,ball;
var canvas;

function setup() {
  var canvas = createCanvas(800,800);

  myEng = Engine.create();
  myWorld = myEng.world;

  var opt = {
    isStatic:true
  }

  myObj = Bodies.rectangle(400,750,450,20,opt);
  World.add(myWorld,myObj);
  
  var res_1 = {
    restitution: 1
  }
  ball = Bodies.circle(400,100,20,res_1);
  World.add(myWorld,ball);

  //var ball1 = createSprite(ball.position.x,ball.position.y,40,40);

  console.log(myObj);
  console.log(myObj.position.x);
  console.log(myObj.position.y);
  console.log(myObj.type);

  console.log(ball);
  
}

function draw() {
  background("pink");  
  
  Engine.update(myEng);
  rectMode(CENTER); 
  rect(myObj.position.x,myObj.position.y,800,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,40,40);

  
  
  drawSprites();

}