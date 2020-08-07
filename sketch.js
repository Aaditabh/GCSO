function setup() {
  createCanvas(800,400);
 wall = createSprite(400, 200, 50, 400);
 car = createSprite(100,200,50,50);
 car.velocityX=2;
 speed=random(55,90);
 weight=random(400,1300);
}

function draw() {
  background(255,255,255);
  if (wall.x-car.x<wall.width/2 + car.width/2) {
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
  if (deformation < 180 && deformation>100) {
    car.shapeColor="red"
  }
  if (deformation>180) {
    car.shapeColor="blue"
  }
  if (deformation<100) {
    car.shapeColor="yellow"
  }
  }  
  drawSprites();
}