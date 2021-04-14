var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(510,580,200,30);
    block3.shapeColor = "red";

    block4 = createSprite(720,580,200,30);
    block4.shapeColor = "green";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = "white";
    ball.velocityX = 6;
    ball.velocityY = 5;

}

function draw() {8
    background(rgb(169,169,169));
    console.log(World.mouseX,  World.mouseY)
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    ball.bounceOff(block1);
    ball.bounceOff(block2);
    ball.bounceOff(block3);
    ball.bounceOff(block4);
    
    if(isTouching(block1,ball) && ball.bounceOff(block1)) {
        ball.shapeColor = "blue";
        music.play();
      }
    
      if(isTouching(block2,ball) && ball.bounceOff(block2)) {
        ball.shapeColor = "orange";
        music.play();
        ball.velocityX = 0;
        ball.velocityY = 0;
      }

      if(isTouching(block3,ball) && ball.bounceOff(block3)) {
        ball.shapeColor = "red";
      }

      if(isTouching(block4,ball) && ball.bounceOff(block4)) {
        ball.shapeColor = "green";
      }
     
   
    drawSprites();
}

function isTouching(obj1,obj2){
  if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
    && obj2.x - obj1.x < obj2.width/2 + obj1.width/2
    && obj1.y - obj2.y < obj2.height/2 + obj1.height/2
    && obj2.y - obj1.y < obj2.height/2 + obj1.height/2) {
  return true;
 }
else {
  return false;  
 }
}
