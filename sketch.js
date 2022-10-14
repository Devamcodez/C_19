var score=0
var gamestate="PLAY"
var gameover,gameoverImg
var restart,restartImg
var bird,bird_flying
var pipes
var pipesImg
var pipe
var pipeImg


function preload(){
bird_flying = loadAnimation("f (1).png","f (2).png","f (3).png","f (4).png","f (5).png","f (6).png","f (7).png","f (8).png")
gameoverImg=loadImage("gameover.png")
restartImg=loadImage("restart.webp")
pipeImg=loadImage("pipe.png")
pipesImg=loadImage("pipes.png")

}

function setup(){
  createCanvas(600,600);
  
  bird = createSprite(300,300)
  bird.addAnimation("flying",bird_flying)
bird.scale=0.2
bird.debug=true


gameover = createSprite(300,250)
gameover.addImage(gameoverImg)

restart = createSprite(300,350)
restart.addImage(restartImg)
restart.scale=0.2
restart.visible=false
pipegroup=new Group()
}

function draw() {
  background("lightBlue")

  if (gamestate==="PLAY"){
    gameover.visible=false
    restart.visible=false
    if(keyDown("space")){
    bird.velocityY=-10
    }
    bird.velocityY=bird.velocityY+0.8
    spawnObstacles()
  if(pipegroup.isTouching(bird)){
    gamestate="END"
  }
}
  if (gamestate==="END"){
    bird.destroy()
    pipegroup.destroyEach()
    gameover.visible=true 
   restart.visible=true
  }
  
  

  drawSprites();
}

function spawnObstacles(){
  if(frameCount%60===0){
    pipe=createSprite(615,Math.round(random(0,50)),10,10)
    pipes=createSprite(615,Math.round(random(550,600)),10,10)
    pipe.addImage(pipeImg)
    pipes.addImage(pipesImg)
    pipe.scale=1.2
    pipes.scale=0.6
    pipe.velocityX=-2
    pipes.velocityX=-2
    pipegroup.add(pipe)
    pipegroup.add(pipes)
    pipe.debug=true
    pipes.debug=true
  }

}
