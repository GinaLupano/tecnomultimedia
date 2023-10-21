class Personaje {
  constructor() {
    this.i = new Imagenes ();
    this.posX = 100;
    this.posY = 50;
    this.victorioso = false;
    this.perder = false;
  }

  dibujar() {
    this.i.Estatico(this.posX, this.posY);
  }

  Derecha() {
    if (this.posX < width - 40) {
      this.posX += 1.6;
    }
  }

  Izquierda() {
    if (this.posX >0 ) {
      this.posX -= 1.6;
    }
  }

  Arriba() {
    if (this.posY >0) {
      this.posY -= 1.6;
    }
  }

  Abajo() {
    if (this.posY < height - 55) {
      this.posY += 1.6;
    }
  }

}
