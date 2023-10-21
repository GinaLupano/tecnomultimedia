class Libro {
  constructor() {
    this.imagenes = new Imagenes ();
    this.posX = random (1, 560);
    this.posY = random (1, 560);
    this.activo = true;
  }

  dibujar() {
    if (this.activo === true) {
      this.imagenes.Libro(this.posX, this.posY);
    }
  }
  
  agarrado () {
    this.activo = false;
  }
}
