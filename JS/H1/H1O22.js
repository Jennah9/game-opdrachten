var kleur = 'indianred';
var afstand;

function setup() {
  canvas = createCanvas(450,450);
  canvas.parent('processing');
  textFont("Verdana");
  textSize(14);
  noStroke();
  frameRate(50);
}

function draw() {
  background('lavender');
  if (mouseX <= height / 2){
    background('yellow');
  } else {
    background('white');
  }
  fill('black');  
  
  mouseX=constrain(mouseX,25,width - 25);
  mouseY=constrain(mouseY,25,height - 25);

  text("Beweeg de muis | x = " + round(mouseX) + " en y = " + round(mouseY),10,20);
  
  ellipse(width / 2,height / 2,100);
  tekenJos(mouseX,mouseY,kleur);
  afstand=dist(mouseX,mouseY,225,225);
  text(round(afstand),10,40);
  
  if (mouseX >= width - 30 || mouseX <= width - 420 || mouseY >= height - 30 || mouseY <= height -420 || afstand <= 80) {
    kleur='red';
  }
  else {
    kleur='indianred';
  }
}
