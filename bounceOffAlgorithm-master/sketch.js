var fixedRect, movingRect, box1, box2;

function setup() {
  createCanvas(1500,1200);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(200, 100,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  box1 = createSprite(600, 100, 50, 50);
  box1.shapeColor = "green";

  box2 = createSprite(800,100,50,50);
  box2.shapeColor = "green";

  movingRect.velocityX = -5;
  fixedRect.velocityX = +5;
}

function draw() {
  background(0,0,0);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  
  if(isTouching(box1,movingRect)){
    box1.shapeColor = "red";
    movingRect.shapeColor = "red";
  }else{
    box1.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  bounceOff(movingRect,fixedRect)
  drawSprites();
}


