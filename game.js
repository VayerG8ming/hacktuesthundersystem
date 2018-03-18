// Creating variables
var myX = 0, myY = 0;patronX=200,patronY=200;vragX=400,vragY=0;to4ki=0;skorost=3; zivot=10;vragX2=150,vragY2=0;goleminaX=30,goleminaY=30;goleminaX2=30,goleminaY2=30;

function update() {
    myX = myX+(mouseX-myX)/10;
	myY = myY+(mouseY-myY)/10;
    if(myY<=200){
    myY=200;
    }
    vragY=vragY+skorost;
    vragY2=vragY2+skorost;
    if(vragY&&vragY2>599){
    vragY=0;
    vragY2=0;
    vragX=Math.random()*800;
    vragX2=Math.random()*400;    
    skorost=skorost+0.1;
    goleminaX=goleminaX+2;
    goleminaX2=goleminaX2+2;
    goleminaY=goleminaY+2;
    goleminaY2=goleminaY2+2;
    }
    if(myY<vragY+30 && vragY<myY+30 && myX<vragX+30 && vragX<myX+30){
    console.log("plok"); 
    zivot=zivot-1;    
    }
    if(patronY<vragY+goleminaY && vragY<patronY+goleminaY && patronX<vragX+goleminaX && vragX<patronX+goleminaX){ 
    console.log("BOOM");    
    vragX=Math.random()*800;    
    vragY=0;
    skorost=skorost+0.1;    
    to4ki=to4ki+1;
    console.log(to4ki);
    goleminaX=goleminaX+2;
    goleminaX2=goleminaX2+2;
    goleminaY=goleminaY+2;
    goleminaY2=goleminaY2+2;   
    }
     if(patronY<vragY2+goleminaY2 && vragY2<patronY+goleminaY2 && patronX<vragX2+goleminaX2 && vragX2<patronX+goleminaX2){ 
    console.log("BOOM");    
    vragX=Math.random()/400;
    vragX2=Math.random()*400;     
    vragY=0;
    vragY2=0;     
    skorost=skorost+0.1;    
    to4ki=to4ki+1;
    console.log(to4ki);
    goleminaX=goleminaX+2;
    goleminaX2=goleminaX2+2;
    goleminaY=goleminaY+2;
    goleminaY2=goleminaY2+2;
    }
    patronY=patronY-40;
  if(zivot<1){
    console.log("GAME OVER"); 
      myX=stop;
      myY=stop;
      vragX=stop;
      vragY=stop;
      patronX=stop;
      patronY=stop;
      vragX2=stop;
      vragY2=stop;
  }
    }

function draw() {
	// This is how you draw a rectangle
    context.fillStyle="black";
    context.fillRect(0,0,800,600);
    context.fillStyle="white"
	context.fillRect(myX, myY, 30, 30);
    context.fillStyle="white";
    context.fillRect(patronX,patronY,5,5);
    context.fillRect(vragX,vragY,goleminaX,goleminaY);
    context.fillRect(vragX2,vragY2,goleminaX2,goleminaY2);
}

function keyup(key) {
	// Show the pressed keycode in the console
	console.log("Pressed", key);
    patronX=mouseX;
    patronY=mouseY;
}
function mouseup() {
	// Show coordinates of mouse on click
	console.log("Mouse clicked at", mouseX, mouseY);
}
