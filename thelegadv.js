///////////////////////////////////////////////////////////////////////////////////////
function orient(x1, y1, x2, y2, x3, y3){
    return (x1*y2 + x3*y1 + x2*y3 - x3*y2 - x1*y3 - x2*y1) > 0;
}
function areRotColliding(a, b){
    //not full but works for moving Rots
    //to be full have to add segment intersection
    for (var i=0; i<4; ++i){
        var flag = true;
        var c = orient(a.px[3], a.py[3], a.px[0], a.py[0], b.px[i], b.py[i]);;
        for (var j=0; j<3; ++j){
            if (orient(a.px[j], a.py[j], a.px[j+1], a.py[j+1], b.px[i], b.py[i]) != c){
                flag=false;
                break;
            }
        }
        if (flag){return true;}
    }
    for (var i=0; i<4; ++i){
        var flag = true;
        var c = orient(b.px[3], b.py[3], b.px[0], b.py[0], a.px[i], a.py[i]);
        for (var j=0; j<3; ++j){
            if (orient(b.px[j], b.py[j], b.px[j+1], b.py[j+1], a.px[i], a.py[i]) != c){
                flag=false;
                break;
            }
        }
        if (flag){return true;}
    }
    return false;
}
class RotRect{
    constructor(x, y, len, wid, cos, sin, color){
        this.len = len;
        this.wid = wid;
        this.color = color;
        this.px = [];
        this.py = [];
        this.updatePos(x, y);
        this.updateAng(cos, sin);
    }
    
    updatePos(x, y){
        for (var i=0; i<4; ++i){
            this.px[i] += x - this.x;
            this.py[i] += y - this.y;
        }
        this.x = x;
        this.y = y;
    }
    
    updateAng(cos, sin){
        this.cos = cos;
        this.sin = sin;
        var ax = this.cos*this.len/2, ay = this.sin*this.len/2;
        var bx = -this.sin*this.wid/2, by = this.cos*this.wid/2;
        this.px[0] = ax+bx;
        this.py[0] = ay+by;
        this.px[1] = ax-bx;
        this.py[1] = ay-by;
        this.px[2] = -ax-bx;
        this.py[2] = -ay-by;
        this.px[3] = -ax+bx;
        this.py[3] = -ay+by;
    }
    
    draw(){
        context.fillStyle = this.color;
        context.beginPath();
        for (var i=0; i<4; ++i){
            context.lineTo(this.x + this.px[i], this.y + this.py[i]);
        }
        context.fill();
    }
    }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Creating variables
//var hero= new Image;
 //hero.src="hero.png";
var cameraX;
var numberofjumps=0;
var alittlebitofgravity=0;
class People extends RotRect{}
var hero = new People(80,510,120,160,1,0,"red");
//function for jumping
function jumping(){
alittlebitofgravity=15;
    numberofjumps=0;
   if(hero.y<160){
   alittlebitofgravity=alittlebitofgravity+1;
   }
}
function update() {
    cameraX=hero.x;
    
    //putting some gravity
 hero.y=hero.y-alittlebitofgravity;
 alittlebitofgravity=alittlebitofgravity-1;
 //movement   
if(isKeyPressed[key_up]&&numberofjumps<1){
    jumping()
    numberofjumps=numberofjumps+1;} 
if(isKeyPressed[key_left]){hero.updatePos(hero.x-1, hero.y+0);}  
if(isKeyPressed[key_right]){hero.updatePos(hero.x+1, hero.y+0);}
    
    //checking jumping    
    if(hero.y>=510){
    hero.y=510;
    numberofjumps=0;
    }
}

function draw() {
// This is how you draw a rectangle
hero.draw(hero.x-cameraX,0);
    
}

function keyup(key) {
	// Show the pressed keycode in the console
	console.log("Pressed", key);
}
function mouseup() {
	// Show coordinates of mouse on click
	console.log("Mouse clicked at", mouseX, mouseY);
}
