var ball;


function setup() {
  createCanvas(400, 400);
  ball = createSprite(200, 200, 20,20);
}

function draw() {
  drawSprites();
  
  if(keyIsDown(LEFT_ARROW)){
    ball.position.x -=5;
    background("rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")");
  }
  if(keyIsDown(RIGHT_ARROW)){
    ball.position.x +=5;
    background("rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")");
  }
  if(keyIsDown(UP_ARROW)){
    ball.position.y -=5;
    background("rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")");
  }
  if(keyIsDown(DOWN_ARROW)){
    ball.position.y +=5;
    background("rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")");
  }
}