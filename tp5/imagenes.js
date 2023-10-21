class Imagenes {
  constructor() {
    this.load();
  }

  load() {
    this.imagenesEstatico = loadImage ("data/estatico.png");
    this.imageneslibro = loadImage ("data/libro.png");
    this.imagenesInstrucciones = loadImage ("data/instrucciones.png");
    this.imagenesGanaste = loadImage ("data/ganaste.png");
    this.imagenesPerdiste = loadImage ("data/perdiste.png");
  }
  Estatico(x, y) {
    image(this.imagenesEstatico, x, y, 35, 40);
  }

  Libro (x, y) {
    image(this.imageneslibro, x, y, 30, 30);
  }

  Instrucciones () {
    image(this.imagenesInstrucciones, 0, 0, width, height);
  }

  Ganaste () {
    image(this.imagenesGanaste, 0, 0, width, height);
  }

  Perdiste () {
    image(this.imagenesPerdiste, 0, 0, width, height);
  }
}
