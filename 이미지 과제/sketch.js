
let numFrames = 33;
let images = [];
let currentFrame = 0;

let x = 25;
let speed = 1; 



function preload() {
    for (let i = 0; i < numFrames; i++) {
        images[i] = loadImage("data/life_" + nf(i,2) + ".png");    
}
}
function setup() {
    createCanvas(400, 300);
    frameRate(30);
  strokeWeight(0);

}

function draw() {
   
    clear();
    image(images[currentFrame], 0, 0, 400, 300);
    if (currentFrame == images.length - 1) {
       currentFrame = 0;
    }


    currentFrame++;
    
    fill(255); 
    let v = random(mouseX, mouseY);
   ellipse(v+20, 80, 3, 30, 2);
   ellipse(v, 20, 3, 20, 5);
   ellipse(v+50, 30, 5, 40, 5);
   ellipse(v+60, 100, 3, 30, 2);
   ellipse(v+40, 200, 3, 30, 2);
   ellipse(v+30, 150, 3, 30, 2);

   
   move(10);
   bounce();
   display();

}

function display() {
    stroke(0);
    fill(175);
     ellipse(x, 70, 130, 120);
     ellipse(x+40, 70, 250, 100);
     ellipse(x+80, 70, 130, 120);
   
}

    function bounce(){
        if ((x > width) || (x < 0)) {
            speed = speed * -1;
        }
    }
function move(s) {
    x = x + speed * s;
}
