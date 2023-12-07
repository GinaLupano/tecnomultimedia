class Escenario {
  constructor() {
    this.grosorLinea = 5;
    this.colorLinea = 30;
  }


  dibujar() {
    strokeWeight(this.grosorLinea);
    stroke(this.colorLinea);
    for (let i = 200; i <= 500; i+= 50) {
      line (50, i, 550, i);
    }
  }
}
