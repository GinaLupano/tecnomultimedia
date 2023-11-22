class Escalera {
  constructor(ex, ey) {
    this.eX = ex;
    this.eY = ey;
    this.grosorLinea = 4;
    this.colorLinea = color(170);
  }

  dibujar() {
    strokeWeight(this.grosorLinea);
    stroke(this.colorLinea);
    line (this.eX, this.eY, this.eX, this.eY - 50);
    line (this.eX + 30, this.eY, this.eX + 30, this.eY - 50);
    line (this.eX, this.eY - 5, this.eX + 30, this.eY - 5);
    line (this.eX, this.eY - 20, this.eX + 30, this.eY - 20);
    line (this.eX, this.eY - 35, this.eX + 30, this.eY - 35);
  }

  zonaSubir (xp, yp, altura) {
    if (xp >= this.eX - 40  && xp <= this.eX + 10 && yp === altura) {
      return true;
    } else {
      return false;
    }
  }
}
