var bullet;
var wall,thickness;
var speed;
var weight;
function setup() {
  createCanvas(1600,800);
 speed = random(223,321);
 weight = random(30,52);
 thickness = random(22,83);
bullet = createSprite(50,200,20,50);
bullet.shapeColor = "white" ;
wall = createSprite(1200,200,thickness,height/2);
wall.shapeColor(80,80,80);
bullet.velocityX = speed; 
damage = 0.5*bulletweight*bulletspeed*bulletspee/thickness*thickness*thickness;
}

function draw() {
  background(255,255,255);  

if (wall.x-bullet.x < (bullet.width+wall.width)/2){
bullet.velocityX = 0;
var deformation = 0.5 * weight * speed *speed/22509;
if (weight = 32 && speed=223 && thickness = 70 && damage = 3.68){
  wall.shapeColor = color("green");
}
if (weight = 32 && speed=223 && thickness = 40 && damage = 12.43){
wall.shapeColor = color(230,230,0);
}

 }

}
drawSprites();
}