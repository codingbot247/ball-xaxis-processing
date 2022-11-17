float x=50, y=100;

void setup() 
{ 
  frameRate(20);
  size(640,360); 
noStroke(); 

} 
void draw() 
{ 
  
  background(100,20,100);
  ellipse(x,y,80,80);
  fill(200,30,50);
  x=x+10;
  
}
