var thief;
var diamond;
var youWin;
var bodyGuard;
var thiefImage;
var diamondImage;
var youWinImage;
var bodyGuardImage;  
var youCaught;
var youCaughtImage;
  
  function preload(){
thiefImage = loadImage ("images/thief.png");
diamondImage = loadImage ("images/diamond.png");
bodyGuardImage = loadImage ("images/bodyguard.png");
youWinImage = loadImage ("images/You win.png");
youCaughtImage = loadImage ("images/you caught.png");
  }
  
 
  function setup() {
  createCanvas(800,400);
  

  thief = createSprite (50,350,100,100);
  thief.addImage("thiefImage",thiefImage);
  thief.scale=0.3;

  diamond = createSprite (770,50,100,100);
  diamond.addImage("diamondImage",diamondImage);
  diamond.scale=0.2;

  bodyGuard = createSprite (450,200,100,100);
  bodyGuard.addImage("bodyGuardImage",bodyGuardImage);
  bodyGuard.scale=0.3;
  bodyGuard.velocityX=20;

  youWin = createSprite(400,200,10,10);
  youWin.scale=0.5;
  youWin.addImage("youWinImage",youWinImage);
  youWin.visible=false;

  youCaught = createSprite(400,200,10,10);
  youCaught.scale=0.5;
  youCaught.addImage("youCaughtImage",youCaughtImage);
  youCaught.visible=false;

}

function draw() {
  background("blue"); 
  edges=createEdgeSprites(); 
  bodyGuard.bounceOff(edges[0]);
  bodyGuard.bounceOff(edges[1]);
  bodyGuard.bounceOff(edges[2]);
  bodyGuard.bounceOff(edges[3]);

  thief.collide(edges[0]);
  thief.collide(edges[1]);
  thief.collide(edges[2]);
  thief.collide(edges[3]);

if(keyDown("UP_ARROW")){
  thief.y=thief.y-10;
}

if(keyDown("DOWN_ARROW")){
  thief.y=thief.y+10;
}

if(keyDown("RIGHT_ARROW")){
  thief.x=thief.x+10;
}

if(keyDown("LEFT_ARROW")){
  thief.x=thief.x-10;
}

if(thief.isTouching(diamond)){
  thief.visible=false;
  diamond.visible=false;
  bodyGuard.visible=false;
  youWin.visible=true;
}

if(thief.isTouching(bodyGuard)){
  thief.visible=false;
  diamond.visible=false;
  bodyGuard.visible=false;
  youCaught.visible=true;
}

  drawSprites();
}