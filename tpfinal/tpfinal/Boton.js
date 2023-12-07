class Boton {

  constructor(bx, by, ancho, alto) {
    this.Bx = bx;
    this.By = by;
    this.Bancho = ancho;
    this.Balto = alto;
    this.textoBoton = ["Iniciar", "Creditos", "Siguiente", "Pasar la\n noche afuera", "Llamar a la\n policia", "Reiniciar", "Intentar callarla", "Ser paciente", "Hacerla callar\n para siempre", "Arrojarla por\n la ventana", "Estrangularla","Volver"];
  }

  dibujar(t) {
    fill(0);
    rect (this.Bx, this.By, this.Bancho, this.Balto);
    fill (255);
    text (this.textoBoton [t], this.Bx + this.Bancho/2, this.By + this.Balto/2);
  }

  presionado() {
    return mouseX > this.Bx && mouseX < this.Bx + this.Bancho && mouseY > this.By && mouseY < this.By + this.Balto;
  }
}
