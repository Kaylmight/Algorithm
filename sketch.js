var fixedRect, movingRect;
var horizontal, vertical;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = 'green';

  movingRect = createSprite(200,200,50,10);
  movingRect.shapeColor = 'green';

}

function draw() {
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  background(255,255,255); 
  horizontal = movingRect.width/2+fixedRect.width/2;
  vertical = fixedRect.height/2+movingRect.height/2;
  if(movingRect.x - fixedRect.x <= horizontal && fixedRect.x-movingRect.x<=horizontal
    && movingRect.y-fixedRect.y<=vertical && fixedRect.y-movingRect.y<=vertical){
     movingRect.shapeColor = 'red';
     fixedRect.shapeColor = 'yellow';
  }
  else{
      movingRect.shapeColor = 'green';
      fixedRect.shapeColor = 'green';
  }

  
  drawSprites();
}