let c;

function setup() {
  createCanvas(600,600);
  c = new Cuento();

}


function draw() {
  background (100);
  c.display();
  if (keyIsPressed) {
    c.mantenerTecla();
  }

}

function mousePressed () {
  c.apretarBoton();
}

function keyPressed () {
  c.apretarTecla();
}
