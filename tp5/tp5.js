// Gina Lupano
// Comision 1, tp5
// LINKVIDEO: https://youtu.be/SK5o18rsgPc 

let juego

  function setup() {
  createCanvas(600, 600);
  juego = new Juego();
}

function draw() {
  background(255,219,246);
  juego.display();
  if (keyIsPressed){
  juego.tecla(keyCode);
  }

}

function keyPressed () {
  juego.keypressed (keyCode);
}
