let img

function preload(){
  img = loadImage("pen.png")
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  image(img, mouseX-25,mouseY-25,75,75)

  
}