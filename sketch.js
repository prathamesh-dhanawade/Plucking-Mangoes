
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var groundObject;
function preload()
{
  boyIMG=loadImage("boy.png")
	
}

function setup() {
	createCanvas(1700, 700);
  boySprite=createSprite(300, 580, 10,10);
	boySprite.addImage(boyIMG)
	boySprite.scale=0.1


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	//Create the Bodies Here.
  rectMode(CENTER);
  boyBody = Bodies.circle(width/2 , 300 , 5 ,{density:1,restitution:1, isStatic:false});
  World.add(world, boyBody);
  


groundObject = new Ground(width/2,644,width,20);
treeObject=new Tree(1200,650);

mango1=new Mango(1300,200,75);
mango2=new Mango(1200,220,80);
mango3=new Mango(1100,290,70);
mango4=new Mango(1279,250,75);
mango5=new Mango(1150,160,80);
mango6=new Mango(1250,120,70);
mango7=new Mango(1350,270,70);
mango8=new Mango(1390,260,70);
mango9=new Mango(1050,255,70);
mango10=new Mango(1130,240,70);

stoneObject=new Stone(200,450,70);
launcherObject = new Launcher(stone.body,{x:200,y:450,r :70});




  
}


function draw() {
  rectMode(CENTER);
  background(255);
  groundObject.display();
  treeObject.display();
  stoneObject.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  launcherObject.display();
  
  detectollision(stoneObject,mango1);
  detectollision(stoneObject,mango2);
  detectollision(stoneObject,mango3);
  detectollision(stoneObject,mango4);
  detectollision(stoneObject,mango5);
  detectollision(stoneObject,mango6);
  detectollision(stoneObject,mango7);
  detectollision(stoneObject,mango8);
  detectollision(stoneObject,mango9);
  detectollision(stoneObject,mango10);

  drawSprites();
 
}

function mouseDragged(){

      Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY, r : mouseR});
}


function mouseReleased(){
  launcherObject.fly();
}

function detectollision(Lstone,Lmango){
  mangoBodyPosition = lmango.body.position
  stoneBodyPosition = lstone.body.position

var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
if(distancr<= lmango.r+lstone)
  {
   Matter.Body.setStatic(lmango.body,false);
  }

}

function keyPressed(){
if (keyCode === 32)  {
Matter.Body.setPosotion(stoneObject.body,{x : 235, y : 420, r : 70});
launcherObject.attach(stoneObject.body);
 }



}
