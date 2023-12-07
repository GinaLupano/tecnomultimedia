class Personaje {
  constructor (px, py) {
    this.imagenes = new Imagenes();
    this.pX = px;
    this.pY = py;
    this.velocidad = 1.5;
    this.gano = false;
    this.vive = true;
  }

  dibujar () {
    this.personaje();
  }

  personaje() {
    this.imagenes.personaje(this.pX, this.pY);
  }

  moverDerecha() {
    if (this.pX < 520) {
      this.pX += this.velocidad;
    }
  }

  moverIzquierda() {
    if (this.pX > 50) {
      this.pX -= this.velocidad;
    }
  }

  subir() {
    this.pY -= 50;
  }
}
