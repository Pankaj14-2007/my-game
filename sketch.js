var form;
var gameState=0;
var fat_runner;
var fatRunner;
var road;
var roadImage;
var obstacle;


function preload(){
 fat_runner=loadAnimation("images/runner1.png","images/runner2.png");
roadImage=loadImage("images/Road.png")




}

function setup() {
  createCanvas(800,800);
  road=createSprite(400.400,50,50);
  road.addImage("road",roadImage)
  road.velocityY=7;

 fatRunner=createSprite(400,400,50,20);
 fatRunner.addAnimation("runner",fat_runner);
 fatRunner.scale=0.2;

 
 
 
  form=new Form();
}

function draw() {
  background(255,255,255);
  if (gameState===0) {
    form.display();
  }
    else if(gameState==1){
      if(road.y>800){
        road.y=400
      }
 
      createObstacle()
      drawSprites();
    }
 




}

 function createObstacle() {
   if(frameCount%100===0){
      obstacle= createSprite(random(200,700),0,50,70);
      obstacle.velocityY=7;
      obstacle.lifetime=100;
   }
  


  
}