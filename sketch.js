const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drops;

function preload(){
    
}

function setup(){
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  drop1 = new Drops(210,100,5,5);
  drop2 = new Drops(220,110,5,5);
  drop3 = new Drops(185,120,5,5);
  drop4 = new Drops(205,130,5,5);
  drop5 = new Drops(270,155,5,5);
  drop6 = new Drops(95,170,5,5);
  drop7 = new Drops(190,140,5,5);
  drop8 = new Drops(175,195,5,5);
  drop9 = new Drops(50,100,5,5);
  drop10 = new Drops(65,60,5,5);
  drop11 = new Drops(86,95,5,5);
  drop12 = new Drops(340,75,5,5);
  drop13 = new Drops(230,35,5,5);
  drop14 = new Drops(125,85,5,5);
  drop15 = new Drops(160,190,5,5);
  
   
    
}

function draw(){
    drop1.display()
    drop2.display()
    drop3.display()
    drop4.display()
    drop5.display()
    drop6.display()
    drop7.display()
    drop8.display()
    drop8.display()
    drop10.display()
    drop11.display()
    drop12.display()
    drop13.display()
    drop14.display()
    drop15.display()
    

}   

