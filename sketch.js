var player1,player2,player3,player4,players;
var p1,p2,p3,p4;
var board,b1;
var coin1,coin2,coin3,coin4,coin5,coin6,coins;
var c1,c2,c3,c4,c5,c6;




function preload(){
  p1 = loadImage("images/1p.png");
  p2 = loadImage("images/2p.png");
  p3 = loadImage("images/3p.png");
  p4 = loadImage("images/4p.png");
  b1 = loadImage("images/board.png");
  c1 = loadImage("images/coin1.png");
  c2 = loadImage("images/coin2.png");
  c3 = loadImage("images/coin3.png");
  c4 = loadImage("images/coin4.png");
  c5 = loadImage("images/coin5.png");
  c6 = loadImage("images/coin6.png");
  
}

function setup(){
    createCanvas(displayWidth,displayHeight);

    board = createSprite(500,350,width,height);
    board.addImage(b1);
    board.scale = 0.5;

    player1=createSprite(100,350,50,50);
    player1.addImage(p1);
    player1.scale = 1.8;

    player2=createSprite(870,350,50,50);
    player2.addImage(p2);
    player2.scale = 1.7;

    player3=createSprite(470,130,50,50);
    player3.addImage(p3);
    player3.scale = 1;

    player4=createSprite(470,580,50,50);
    player4.addImage(p4);

    coins=createSprite(1200,350);
     

    players=[player1,player2,player3,player4];
    


}

function draw(){
    background("white");

    
    

    drawSprites();

}

function coin(){

 

  if(keyCode === 32 ){
    player.distance +=10
    var rand=Math.round(random(1,6));
    switch(rand){
      case 1: coins.addImage(c1);
      break;
      case 2: coins.addImage(c2);
      break;
      case 3: coins.addImage(c3);
      break;
      case 4: coins.addImage(c4);
      break;
      case 5: coins.addImage(c5);
      break;
      case 6: coins.addImage(c6);
      break;

       }
     }
}