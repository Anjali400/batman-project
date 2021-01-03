var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies; 
var drop;
var drops=[]
var umb=[]
var maxDrops=100;
function preload(){
    
}

function setup(){
   createCanvas(1000,600)
   engine = Engine.create();
  world = engine.world;
  if (frameCount%50==0){
  for(var i=0;i<maxDrops;i++){
   drops.push(new Drop(random(0,400),random(0,400)))
  }
  }
}

function draw(){
    background("pink")
  if(this.drop.position.y>height){
      Matter.Body.setPosition(this.drop,{x:random(0,400),y:random(0,400)})
  }
 
    drawSprites()
}   

