class Meta {

  constructor () {
    this.mX = 520;
    this.mY = 160;
    this.ancho = 30;
  }


  dibujar() {
    noStroke();
    fill (113, 64, 0);
    rect (this.mX, this.mY, this.ancho, 40);
    fill(232, 225, 0);
    circle (this.mX + 25, this.mY + 20, 5);
  }
}
