const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var bg,bgImg1,bgImg2,bgImg3,bgImg4,bgImg5;

var heading,headingImg;
var backButton,backButtonImg;
var startButton,startButtonImg;
var nextButton2,nextButton2Img;
var homeButton,homeButtonImg;
var visionButton,colorButton,exerciseButton,infoButton;
var visionButtonImg,colorButtonImg,exerciseButtonImg,infoButtonImg;
var gameState="start";
var eye,eye1;
var cblock,vblock,eblock;
var cblockImg,vblockImg,eblockImg;


//exercise
var ball,candle;
var ballImg,candleImg;

//color vision
var chart1,chart2,chart3,chart2,chart3,chart4;
var chart1Img,chart2Img,chart3Img,chart4Img;
var form,system,code,security;
var score=0;


function preload() {
  bgImg1=loadImage("bg1.png");
  bgImg2=loadImage("bg2.png");
  bgImg3=loadImage("bg3.png");
  bgImg4=loadImage("bg4.png");
  bgImg5=loadImage("bg5.png");

  //eyelogo
  eye1=loadImage("eye.PNG");
 

  //heading
  headingImg=loadImage("heading.png");

  visionButtonImg=loadImage("vblock.png");
  colorButtonImg=loadImage("cblock.png");
  exerciseButtonImg=loadImage("eblock.png");
  infoButtonImg=loadImage("Iblock.png");
//exercise
 ballImg=loadImage("illusion.png");
 candleImg=loadImage("candle1.png");


//buttons
  backButtonImg=loadImage("backButton.png");
  startButtonImg=loadImage("nextButton.png");
  homeButtonImg=loadImage("homebutton.png");



  //instructions 
  cblockImg=loadImage("cblock2.png");
  eblockImg=loadImage("eblock2.png");
  vblockImg=loadImage("vblock.png");

  //colour vision charts
  chart1Img=loadImage("chart1.png.png");
  chart2Img=loadImage("chart2.png.png");
  chart3Img=loadImage("chart3.png.png");
  chart4Img=loadImage("chart4.png.png");
}







function setup() {
  createCanvas(displayWidth-50,displayHeight-200);

  engine=Engine.create();
  world=engine.world;

  bg=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  bg.addImage("bg1",bgImg1);
  bg.scale=0.7;
  

  heading=createSprite(650,50)
  heading.addImage("heading",headingImg);
  heading.visible=false;

  eye=createSprite(700,150);
  eye.addImage("heading eye",eye1);
  eye.scale=0.5;
  eye.visible=false;

  visionButton=createSprite(200,370,100,100);
  visionButton.addImage(visionButtonImg);
  visionButton.scale=0.9;
  visionButton.visible=false;
  

  colorButton=createSprite(520,350,100,100);
  colorButton.addImage(colorButtonImg);
  colorButton.visible=false;
  colorButton.scale=1.1;

  exerciseButton=createSprite(850,350,100,100);
  exerciseButton.addImage(exerciseButtonImg);
  exerciseButton.visible=false;
  exerciseButton.scale=0.9;

  infoButton=createSprite(1150,350,100,100);
  infoButton.addImage(infoButtonImg);
  infoButton.visible=false;
  infoButton.scale=0.65;

  //buttons
  backButton=createSprite(100,100,100,100);
  backButton.addImage(backButtonImg);
  backButton.visible=false;
  backButton.scale=0.4;

  
  startButton=createSprite(1100,120,100,100);
  startButton.addImage(startButtonImg);
  startButton.visible=false;
  startButton.scale=0.4;
 

  homeButton=createSprite(80,80,100,100);
  homeButton.addImage(homeButtonImg);
  homeButton.visible=false;
  homeButton.scale=0.4;


  //exercise1
  ball=createSprite(600,283,300,300);
  ball.addImage(ballImg);
  ball.visible=false;
  ball.scale=1.2;

  //exercise2
  candle=createSprite(600,283,300,300);
  candle.addImage("candle",candleImg);
  candle.visible=false;
  candle.scale=1.2;


  //instructions
  vblock=createSprite(200,220);
  vblock.addImage(vblockImg);
  vblock.scale=0.5;
  vblock.visible=false;

  cblock=createSprite(650,220);
  cblock.addImage(cblockImg);
  cblock.scale=0.7;
  cblock.visible=false;

  eblock=createSprite(1100,220);
  eblock.addImage(eblockImg);
  eblock.scale=0.6;
  eblock.visible=false;

 

  //vision charts
  chart1=createSprite(250,120);
  chart1.addImage(chart1Img);
  chart1.scale=0.8;
  chart1.visible=false;

  chart2=createSprite(500,400);
  chart2.addImage(chart2Img);
  chart2.scale=0.9;
  chart2.visible=false;

  chart3=createSprite(800,120);
  chart3.addImage(chart3Img);
  chart3.scale=0.4;
  chart3.visible=false;

  chart4=createSprite(1160,400);
  chart4.addImage(chart4Img);
  chart4.scale=0.4;
  chart4.visible=false;

  

}






function draw() {
  background(0); 
  Engine.update(engine); 
  drawSprites();
  if(gameState==="start"){
    start();
   
  }
  else if(gameState==="ex1"){
    exercise1();
  }
  else if(gameState==="ex2"){
    exercise2();
  }
  else if(gameState==="instruction"){
    instruction();
  }else if(gameState==="colourVision"){
    colourVision();

    
    security = new Security();
  system = new System();
  
 
  security.display();

  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

  if(score === 4) {
   
    console.log("mission complete");
  }
  }

}







function start(){

  visionButton.visible=true;
  colorButton.visible=true;
  exerciseButton.visible=true;
  infoButton.visible=true;

  

  heading.velocityX=3;
  heading.visible=true;
  if(heading.position.x>1000){
    heading.x=0
  }

  eye.visible=true;
  eye.velocityX=3;
  if(eye.position.x>1000){
    eye.x=heading.x+50;
    
  }

  backButton.visible=false;
  startButton.visible=false;
  homeButton.visible=false;
  vblock.visible=false;
  cblock.visible=false;
  eblock.visible=false;
  ball.visible=false;
  candle.visible=false;
  chart1.visible=false;
  chart2.visible=false;
  chart3.visible=false;
  chart4.visible=false;


  bg.addImage("bg1",bgImg1);
  bg.changeImage("bg1",bgImg1);
  bg.scale=0.7;

  textSize(25);
  fill("black");
  textFont("Georgia");
  text("VISION CHECK",100,520);

  textSize(25);
  fill("black");
  textFont("Georgia");
  text("COLOUR VISION",450,520);

  textSize(25);
  fill("black");
  textFont("Georgia");
  text("EYE  MUSCLES",800,520);
  text("EXERCISE",825,550);

  textSize(25);
  fill("black");
  textFont("Georgia");
  text("INSTRUCTIONS",1080,520);

  visionButton.rotation=visionButton.rotation+2;
  colorButton.rotation=colorButton.rotation+2;
  exerciseButton.rotation=exerciseButton.rotation+2;
  infoButton.rotation=infoButton.rotation+2;

 if(mousePressedOver(exerciseButton)){
    gameState="ex1";
 }
  else if(mousePressedOver(infoButton)){
    gameState="instruction";
}
  else if(mousePressedOver(colorButton)){
    gameState="colourVision";
  }
 
}



function exercise1(){

  visionButton.visible=false;
  colorButton.visible=false;
  exerciseButton.visible=false;
  infoButton.visible=false;
  homeButton.visible=false;
  heading.visible=false;
  eye.visible=false;
  vblock.visible=false;
  cblock.visible=false;
  eblock.visible=false;
  candle.visible=false;
  chart1.visible=false;
  chart2.visible=false;
  chart3.visible=false;
  chart4.visible=false;
 


  backButton.visible=true;
  startButton.visible=true;
  ball.visible=true;
  ball.rotation=ball.rotation+2;

  textSize(30);
  fill("#64FDFB");
  text("𝙁𝙤𝙘𝙪𝙨  𝙤𝙣  𝙩𝙝𝙚  𝙧𝙚𝙙  𝙙𝙤𝙩",950,500);
  
  //exercise

  bg.addImage("bg2",bgImg2);
  bg.changeImage("bg2",bgImg2);
  bg.scale=0.7;
  

  if(mousePressedOver(backButton)){
    gameState="start";
  }

    if(mousePressedOver(startButton)){
      gameState="ex2";
    }
}





function exercise2(){

  visionButton.visible=false;
  colorButton.visible=false;
  exerciseButton.visible=false;
  infoButton.visible=false;
  startButton.visible=false;
  homeButton.visible=false;
  heading.visible=false;
  eye.visible=false;
  vblock.visible=false;
  cblock.visible=false;
  eblock.visible=false;
  ball.visible=false;
  chart1.visible=false;
  chart2.visible=false;
  chart3.visible=false;
  chart4.visible=false;


  backButton.visible=true;
  candle.visible=true;
  
  textSize(30);
  fill("white");
  text("𝙁𝙤𝙘𝙪𝙨 𝙤𝙣 𝙘𝙖𝙣𝙙𝙡𝙚'𝙨 𝙛𝙡𝙖𝙢𝙚",800,500);

  //exercise

  bg.addImage("bg2",bgImg4);
  bg.changeImage("bg2",bgImg4);
 
  if(mousePressedOver(backButton)){
    gameState="start";
  }
  
}





/*
 function exercise3(){
 
  backButton.visible=true;
 nextButton2.visible=false;

  candle.visible=false;

  if(mousePressedOver(backButton)){
    gameState="start";
  }
  
 }

  //exercise
  textSize(20);
  fill("black");
  text("complete");

  if(mousePressedOver(backButton)){
    gameState="start";
  }

  console.log("exercise 3");
}

*/


function instruction(){
 
  visionButton.visible=false;
  colorButton.visible=false;
  exerciseButton.visible=false;
  infoButton.visible=false;
  heading.visible=false;
  eye.visible=false;
  chart1.visible=false;
  chart2.visible=false;
  chart3.visible=false;
  chart4.visible=false;

  bg.addImage("bg3",bgImg3);
  bg.changeImage("bg3",bgImg3);
  bg.scale=12;

  homeButton.visible=true;



  vblock.visible=true;
  vblock.rotation=vblock.rotation-2;
  cblock.visible=true;
  cblock.rotation=cblock.rotation-2;
  eblock.visible=true;
  eblock.rotation=eblock.rotation-2;

  for(var num=220;num<600;num=num+30){
    line(400,num,400,num+20);
  }
  for(var num=220;num<600;num=num+30){
    line(860,num,860,num+20);
  }

 if(mousePressedOver(homeButton)){
  gameState="start";
 }


  //instructions about buttons
 textSize(50);
 fill("yellow");
 text("𝘐𝘕𝘚𝘛𝘙𝘜𝘊𝘛𝘐𝘖𝘕𝘚",460,80);
 fill("black");
 text("★☆★                          ★☆★",320,80);
 text("........................",452,87);

 //instructions about vision button
 textSize(40);
 fill("darkpink");
 text("✴ vision box is  ",100,350);
 text("used to check our",20,400);
 text("users eye vision",20,450)


 //instructions about colour vision button
 textSize(40);
 fill("darkpink");
 text("✴ colour box is for",500,350);
 text(" to  find  eye  colours",420,400);
 text("deficiency",420,450)

 textSize(40);
 fill("darkpink");
 text("✴ exercise box is ",960,350);
 text(" for giving the strength",880,400);
 text(" to the muscles of eye",880,450)
}





function colourVision(){
  visionButton.visible=false;
  colorButton.visible=false;
  exerciseButton.visible=false;
  infoButton.visible=false;
  startButton.visible=false;
  heading.visible=false;
  eye.visible=false;
  vblock.visible=false;
  cblock.visible=false;
  eblock.visible=false;
  ball.visible=false;
  chart1.visible=false;
  chart2.visible=false;
  chart3.visible=false;
  chart4.visible=false;

  homeButton.visible=true;

  if(mousePressedOver(homeButton)){
    gameState="start";

  }

  bg.addImage("bg5",bgImg4);
  bg.changeImage("bg5",bgImg4);
  bg.scale=6;

  chart1.visible=true;
  chart2.visible=true;
  chart3.visible=true;
  chart4.visible=true;

  

  

  textSize(24);
  fill("yellow");
  text("Which digit you are able to see?",80,200);
  text("Write the name of the insect you are able to see.",250,480);
  text("Which alphabets you are able to see?",599,200);
  text("Write the letter you are able to see.",930,480);

 
}





