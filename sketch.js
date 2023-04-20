var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var obstaclesGroup;


var PLAY = 1;
var END = 0;

var gameState = PLAY;

function preload(){
bgImg = loadImage("assets/bg.png")
obsTop1Img = loadImage("./assets/obsTop1.png"); 
obsTop2Img = loadImage("./assets/obsTop2.png");
balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
}

function setup(){

//Imagen de fondo
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3

//Crear bases superiores e inferiores
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//Crear globo      
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;
balloon.debug= true;
balloon.setCollider("circle", 0,0,10);


obstaclesGroup = new Group();
}
function spawnObstacles() {
if(frameCount % 100 === 0){
  var rand = Math.round(random(10,150))
  var obstacle = createSprite(400, rand);
  obstacle.scale = 0.15;
  obstacle.velocityX = -4;

  var aleatoria = Math.round(random(1,2,3));
  switch(aleatoria){
   case 1:obstacle.addImage(obsTop1Img)
   break;
   case 2: obstacle.addImage(obsTop1Img)
   break;
   default:
   break;
  } 
  
  obstaclesGroup.add(obstacle);

}
}



function draw() {
  
  background("black");
        
          //Hacer brincar el globo aerostático
          if(keyDown("space")) {
            balloon.velocityY= -2.5 ;
            
          }
         if(balloon.isTouching(obstaclesGroup))
          console.log("Collision")
          //Añadir gravedad
           balloon.velocityY +=0.05;
           balloon.collide(bottomGround); 
           spawnObstacles();

        drawSprites();
        
}
