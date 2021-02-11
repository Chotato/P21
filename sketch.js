var speed, weight, bullet;
var thickness, wall;
var damage;

function setup() {
  createCanvas(1600,400);
  
  speed = random(55, 90);
  weight = random(400, 1500);

  bullet = createSprite(50, 150, 20, 5);
  wall = createSprite(1200, 200, thickness, height/2); 

  wall.shapeColor = rgb(80, 80, 80);

  

  thickness = random(22, 83);
  speed = random(223, 321);
  weight = random(30, 52);


  bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);  
  
if(hC(bullet, wall)){

  damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

  bullet.velocityX = 0;
  if(damage<10){
    wall.shapeColor = "green";
  }
  if(damage>10){
    wall.shapeColor = "red";
  }
}
bullet.depth = wall.depth+1;
drawSprites();
}
function cC(){
  if (wall.x - bullet.x < bullet.width/2+wall.width/2 &&
      bullet.x - wall.x < bullet.width/2+wall.width/2 &&
      bullet.y-wall.y < wall.height/2+bullet.height/2 &&
      wall.y-bullet.y < wall.height/2+bullet.height/2){
  
      return true;
   }
  }

function hC(lbullet, lwall){
  bRE = bullet.x+bullet.width;
  if(bRE >= wall.x){
    return true;
  }else{
    return false;
  }
} 

