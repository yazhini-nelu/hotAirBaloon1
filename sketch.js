var baloon,baloonimg;



function preload(){
  baloonimg=loadImage("baloon.png")
  cityimg=loadImage("cityImage.png")

}

function setup() {
  createCanvas(800,800);
  baloon=createSprite(400, 200, 50, 50);
  baloon.addImage(baloonimg);
}

function draw() {
  background(cityimg);  
  drawSprites();
  
if (keyCode===(38)){
  baloon.velocityY=-2

}
if (keyCode===(40)){
  baloon.velocityY=2
  
}
if (keyCode===(39)){
  baloon.velocityX=2
  
}
if (keyCode===(37)){
  baloon.velocityX=-2
  

  
}
}