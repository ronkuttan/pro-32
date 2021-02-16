
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, fish1;
var backgroundImg,platform;
var penguin1, slingshot;
var b1,block1;
var score = 0;


function preload() {
    backgroundImg = loadImage("bgimage.jpg");
}

function setup() {
  createCanvas(1400,665);
  engine = Engine.create();
  world = engine.world;

  penguin1 = new Penguin(115,465)
  ground = new Ground(690,650,1800,30)
 
  block1 = new Block1(650,505,220)
  block2 = new Block1(850,505,220)
  block3 = new Block1(882,505,220)
  block4 = new Block1(1082,505,220)
  block5 = new Block1(1114,505,220)
  block6 = new Block1(1314,505,220) 
 
  block9 = new Block1(850,258,220)
  block10 = new Block1(882,258,220)
  block11 = new Block1(1082,258,220)
  block12 = new Block1(1114,258,220)
 
 
 b1 = new Box (982,392,800,27)
 b2 = new Box (984,120,260,27)
 b3 = new Box (740,375,200,27)
 b4 = new Box (1240,375,200,27)
 b5 = new Box (982,110,180,25)
 b6 = new Box (982,100,80,25)

 
  fish1 = new Fish(550,560);
  fish2 = new Fish(750,560);
  fish3 = new Fish(990,560);
  fish4 = new Fish(1220,560);
  fish5 = new Fish(750,300);
  fish6 = new Fish(990,330);
  fish7 = new Fish(1220,300);

 slingshot = new SlingShot(penguin1.body,{x:115, y:465});


}

function draw() {
  background(backgroundImg);

  fill("black");
  textSize(20)
  text("Score = "+ score, 50,50);
 

  Engine.update(engine);
  drawSprites();

 
  ground.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();

  block9.display();
  block10.display();
  block11.display();
  block12.display();
  
  penguin1.display();

  fish1.display();
  fish2.display();
  fish3.display();
  fish4.display();

  fish5.display();
  fish6.display();
  fish7.display();

  slingshot.display();

}


function mouseDragged(){
  Matter.Body.setPosition(penguin1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(penguin1.body, {x: 115, y:465});
    slingshot.attach(penguin1.body);
  }
}