 var tom,jerry
var tom1,tom2,tom3,tom4
var jerry1,jerry2,jerry3,jerry4
var tom1img,tom2img,tom3img,tom4img,jerry1img,jerry2img,jerry3img,jerry4img
var cat1,catImage3,tom,cat
var background,backgroundimg
function preload() {
    //load the images here
    tom1img=loadAnimation("images/tomOne.png")
 tom2img=loadAnimation("images/tomTwo.png")
   tom3img=loadAnimation("images/tomThree.png")
  tom4img=loadAnimation("images/tomFour.png")
    backgroundimg=loadImage("images/garden.png")

   jerry1img=loadAnimation("images/jerryOne.png")
     jerry2img=loadAnimation("images/jerryTwo.png")                            
   jerryimg=loadAnimation("images/jerryThree.png") 
   jerry4img=loadAnimation("images/jerryFour.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom=createSprite(450,550,30,30);
tom.addAnimation(tom1img)
tom.scale=0.07


jerry=createSprite(100,550,30,30);
 jerry.addAnimation(jerry1img)
jerry.scale=0.07

// jerry2=createSprite(100,500,30,30);
// jerry2.addImage(jerry2img)
// jerry2.scale=0.07

// jerry3=createSprite(100,450,30,30);
// jerry3.addImage(jerry3img)
// jerry3.scale=0.07

// jerry4=createSprite(100,400,30,30);
// jerry4.addImage(jerry4img)
// jerry4.scale=0.07



}

function draw() {

    background(backgroundimg);
    if(tom.x-jerry.x<(tom.width-jerry.width)/2){
      tom.velocityX=0
      tom.addAnimation("tomlastimg",tom3img)
      tom.x=300
      tom.scale=0.2
      tom.changeAnimation("tomlastimg")

    
      jerry.addAnimation("jerrylastimg",jerry3img)
      
      jerry.scale=0.2
      jerry.changeAnimation("jerrylastimg")
    }
//background.addImage("garden.png")
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

 // For moving and changing animation write code here
 if(keyCode === LEFT_ARROW){
 tom.velocityX=-5;
tom.addAnimation("catRunning",tom2img);
 tom.changeAnimation("catRunning");

 
 jerry.addAnimation("jerryteasing",jerry2img);
 jerry.frameDelay=25
  jerry.changeAnimation("jerryteasing");
  

 }
}
