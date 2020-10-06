var faucet, can, conveyerbelt, water, score
var faucetImg, canImg, conveyerImg,waterImg, backgroundImg
var gameState="play"
function preload(){
  faucetImg=loadImage("faucet.png")
  canImg=loadImage("can.png")
  conveyerImg=loadImage("conveyerbelt.png")
  waterImg=loadImage("WaterDroplet.png")
  backgroundImg=loadImage("industrial-background.jpg")
}


function setup() {
  createCanvas(800,400);
 
  faucet=createSprite(700,170,20,20)
  faucet.scale=0.6
  faucet.addImage("faucet",faucetImg)
  conveyerbelt=createSprite(400,330,800,20)
  conveyerbelt.scale=1.7
  conveyerbelt.addImage("conveyerbelt",conveyerImg)
 conveyerbelt.debug=true
 
score=0;
  waterGroup = new Group;
  canGroup= new Group;

  conveyerbelt.setCollider("rectangle",0,0,conveyerbelt.width,conveyerbelt.height/4)
  
  
}

function draw() {
  background(backgroundImg); 
  if(gameState==="play"){ 
spawnCan()

if(waterGroup.isTouching(canGroup)){
  score=score+1;
  waterGroup.destroyEach();
}

if(waterGroup.isTouching(conveyerbelt)){
  waterGroup.destroyEach();
  score=score-1;
}
if(score<=-5){
  gameState="end"
  
  }
  }
  else if (gameState==="end"){
    canGroup.setVelocityXEach(0)
    conveyerbelt.velocityX=0
    textSize(40);
    fill("red");
    text("Game Over",400,200)

  }
textSize(20);
fill("blue")
text("Score:"+score,100,50);




  drawSprites();

}

function keyPressed(){
  if(keyCode===32 && gameState==="play"){
    water=createSprite(560,90,20,20)
  water.addImage("waterdroplet",waterImg)
    water.velocityY=4;
    water.scale=0.05
    waterGroup.add(water);

  }
}

function spawnCan(){
  if(frameCount%80===0){
    can=createSprite(10, 280, 50, 50);
  can.addImage("emptyCan",canImg)
  can.velocityX=3;
  can.scale=0.16
  canGroup.add(can);
  
  }
}

