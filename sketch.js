var Rect1, Rect2;

function setup() {
  createCanvas(800,400);
  Rect1 = createSprite(380, 100, 40, 80);
  Rect2 = createSprite(200, 300, 80, 40);
  Rect1.shapeColor = "green";
  Rect1.velocityX = -5;
  Rect1.velocityY = 5;
  Rect2.shapeColor = "green";
  Rect2.velocityX = 5;
  Rect2.velocityY = -5;
}

function draw() {
  background(0, 0, 0);
  //console.log(Rect2.x + Rect1.x);
  

  if(Rect2.x - Rect1.x < Rect2.width/2 + Rect1.width/2
    && Rect1.x - Rect2.x < Rect2.width/2 + Rect1.width/2) {
    Rect1.velocityX = Rect1.velocityX * -1;
    Rect2.velocityX = Rect2.velocityX * -1;
  }
  if(Rect2.y - Rect1.y < Rect2.height/2 + Rect1.height/2
    && Rect1.y - Rect2.y < Rect2.height/2 + Rect1.height/2) {
      Rect1.velocityY = Rect1.velocityY * -1;
      Rect2.velocityY = Rect2.velocityY * -1;
    }
  drawSprites();
}