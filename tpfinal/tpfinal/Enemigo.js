class Enemigo {

  constructor (ex) {
    this.eX = ex;
    this.eY = random (-300, -100);
    this.ancho = 30;
    this.alto = 30;
    this.velocidadCaida = random (0.5, 2.1);
    this.colorEnemigo = color(random(255), random(255), random(255));
  }

  dibujar() {
    noStroke();
    fill (this.colorEnemigo);
    rect (this.eX, this.eY, this.ancho, this.alto);
    this.eY += this.velocidadCaida;
    this.bucle();
  }

  bucle() {
    if (this.eY > height) {
      this.eY = random (-300, -100);
    }
  }
}
