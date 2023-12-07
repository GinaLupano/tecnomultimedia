class Imagenes {
  
  constructor() {
    this.load();
  }
  
  load () {
    this.pantalla = [];
    for (let i = 1; i < 18; i++) {
      this.pantalla [i] = loadImage('data/pantalla'+i+'.jpeg');
    }
    this.imagenQuieto = loadImage ("data/Idle.png");
    this.imagenPerder = loadImage ("data/Perder.jpeg");
    this.imagenInstrucciones = loadImage( "data/Instrucciones.jpeg");
  }
  
  cargar (i) {
    image(this.pantalla [i],0,0,width,height);
  }
  
  personaje (px, py) {
    image(this.imagenQuieto, px, py, 40, 40);
  }
  
  perder () {
    image(this.imagenPerder, 0, 0, width, height);
    textSize(32);
    stroke(255, 0, 0);
    fill (255);
    textStyle (BOLD);
    text ("GAME OVER", width/2, height/2);
    textSize (22);
    noStroke();
    textStyle(NORMAL);
    text ("Pulsa la R para reiniciar", width/2, 355);
  }
  
  instrucciones() {
    image(this.imagenInstrucciones, 0, 0, width, height);
    textSize(32);
    fill(255);
    textStyle (BOLD);
    text ("INSTRUCCIONES", width/2, 100);
    textStyle(NORMAL);
    textSize(22);
    text ("Sube las escaleras y acaba con esto de una vez por todas", width/2, 200);
    text ("Mueve al personaje con las flechas de direccion \n y esquiva las cosas que tira la sra. Navárrez para detenerte", width/2, 270);
  }
}
