var car, wall
var speed, weight 

function setup() {
  createCanvas(800,400);

  speed = random(50,90);
  weight = random(400,1500);

  car = createSprite(150, 200, 70, 50);
  wall = createSprite(600, 200, 60, height/2);

  car.velocityX = speed;

}

function draw() {
  background(255,255,255);  

  if(hasCollided(car, wall)){
    car.velocityX = 0;
     var damage = 0.5 * weight * speed * speed/22500;
     if(damage < 100){
       car.shapeColor = color(0, 255, 0);
     }

     if(damage >= 100, 180){
       car.shapeColor = color(230, 230, 0);
     }
 
     if(damage > 180){
       car.shapeColor = color(255, 0, 0);
     }
  }
   
    

  drawSprites();
}

function hasCollided(bullet, wall){
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if(bulletRightEdge >= wallLeftEdge){
    return true;
  }
  return false;
}