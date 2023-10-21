
class Juego {
  constructor() {
    this.i = new Imagenes ();
    this.personaje = new Personaje ();
    this.contador = new Contador ();
    this.libros = [];
    for (let i = 0; i < 100; i++) {
      this.libros [i] = new Libro()
    }
    this.seg = 0;
    this.estado = 1;
  }

  display() {
    if ( frameCount % 60 === 0) {
      this.seg ++;
    }
    if (this.seg < 5) {
      this.i.Instrucciones();
    } else {
      for (let i = 0; i < 100; i++) {
        this.libros [i] .dibujar();
      }
      this.personaje.dibujar();
      this.agarrar();
      this.contador.dibujarTiempo();
      this.contador.dibujarLibrosGuardados();
      this.victoria();
      this.fracasar();
    }
    if (this.personaje.victorioso === true && this.estado === 2) {
      this.i.Ganaste();
    }
    if (this.personaje.perder === true && this.estado === 3) {
      this.i.Perdiste();
    }
  }
  victoria () {
    if (this.contador.guardados === this.contador.total && this.contador.segundos > 0) {
      this.personaje.victorioso = true;
      this.estado = 2;
    }
  }

  fracasar () {
    if (this.contador.segundos <= 0) {
      this.personaje.perder = true;
      this.estado = 3;
    }
  }
  
keypressed (keyCode) {
    if (key === 'r' && (this.estado === 2 || this.estado === 3)) {
      this.estado = 1;
      this.personaje = new Personaje ();
      this.contador = new Contador ();
      for (let i = 0; i < 100; i++) {
        this.libros [i] = new Libro()
      }
    }
  }

  tecla(keyCode) {
    if  (keyCode === RIGHT_ARROW) {
      this.personaje.Derecha();
    } else if (keyCode ===LEFT_ARROW) {
      this.personaje.Izquierda();
    } else if (keyCode === UP_ARROW) {
      this.personaje.Arriba();
    } else if (keyCode === DOWN_ARROW) {
      this.personaje.Abajo();
    }
  }

  zonaAgarrar (px, py, lx, ly) {
    return lx + 30 > px && lx < px + 35 && ly + 30 > py && ly < py + 40;
  }

  agarrar () {
    for (let i = 0; i < 100; i++) {
      if (this.zonaAgarrar (this.personaje.posX, this.personaje.posY, this.libros[i].posX, this.libros[i].posY) && this.libros[i].activo === true) {
        this.libros[i].activo = false;
        this.contador.sumaLibro();
      }
    }
  }
}
