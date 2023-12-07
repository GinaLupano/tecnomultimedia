class Juego {
   constructor() {
    this.imagenes = new Imagenes ();
    this.personaje = new Personaje(50,460);
    this.escenario = new Escenario();
    this.meta = new Meta();
    this.cantidadEnemigos = 15;
    this.enemigos = [];
    for (let i = 0; i < this.cantidadEnemigos; i++) {
      this.enemigos [i] = new Enemigo(i*50);
    }
    this.e1 = new Escalera(500, 500);
    this.e2 = new Escalera(80, 450);
    this.e3 = new Escalera(430, 400);
    this.e4 = new Escalera(100, 350);
    this.e5 = new Escalera(450, 300);
    this.e6 = new Escalera (50,250);
    this.segundos = 0;
    this.estadoJuego = 0;
  }

  display() {
    this.contarSegundos();
    if (this.segundos < 5) {
      this.imagenes.instrucciones();
    } else if (this.segundos >= 5 && this.estadoJuego === 0) {
      this.escenario.dibujar();
      this.meta.dibujar();
      this.e1.dibujar();
      this.e2.dibujar();
      this.e3.dibujar();
      this.e4.dibujar();
      this.e5.dibujar();
      this.e6.dibujar();
      this.personaje.dibujar();
      for (let i = 0; i < this.cantidadEnemigos; i++) {
        this.enemigos[i].dibujar();
      }
      this.colisionEnemigo();
      this.colisionMeta();
    }
    if (this.personaje.vive === false && this.estadoJuego === 1) {
      this.perder();
    }
  }


  colisionPerder (xe, ye, enemigoAncho, px, py, perancho, peralto) {
    if (xe+ enemigoAncho > px + 10 && xe < px + perancho && ye + enemigoAncho > py && ye < py + peralto) {
      return true;
    }
  }

  colisionGanar (xm, px,py) {
    if (px > xm - 10 && py === 160) {
      return true;
    }
  }

  colisionEnemigo() {
    for (let i = 0; i < this.cantidadEnemigos; i++) {
      if (this.colisionPerder(this.enemigos[i].eX, this.enemigos[i].eY, this.enemigos[i].ancho, this.personaje.pX, this.personaje.pY, 40, 40) && this.personaje.vive === true ) {
        this.personaje.vive = false;
        this.estadoJuego = 1;
      }
    }
  }

  colisionMeta() {
    if (this.colisionGanar(this.meta.mX, this.personaje.pX,this.personaje.pY) && this.personaje.vive === true) {
      this.personaje.gano = true;
      this.estadoJuego = 2;
    }
  }

  perder() {
    this.imagenes.perder();
  }
  
  reiniciarJuego() {
    this.segundos = 0;
    this.estadoJuego = 0;
    for (let i = 0; i < this.cantidadEnemigos; i++) {
      this.enemigos[i] = new Enemigo (i*50);
    }
    this.personaje = new Personaje (50, 460);
  }

  contarSegundos() {
    if (frameCount % 60 === 0) {
      this.segundos ++;
    }
  }

  teclaMantenida (keyCode) {
    if (keyCode === RIGHT_ARROW) {
      this.personaje.moverDerecha();
    } else if (keyCode === LEFT_ARROW) {
      this.personaje.moverIzquierda();
    }
  }

  funcionTecla(keyCode) {
    if (keyCode === UP_ARROW) {
      if (this.e1.zonaSubir(this.personaje.pX, this.personaje.pY, 460) || this.e2.zonaSubir(this.personaje.pX, this.personaje.pY, 410) || this.e3.zonaSubir(this.personaje.pX, this.personaje.pY, 360) || this.e4.zonaSubir(this.personaje.pX, this.personaje.pY, 310) || this.e5.zonaSubir(this.personaje.pX, this.personaje.pY, 260) || this.e6.zonaSubir(this.personaje.pX, this.personaje.pY, 210)) {
        this.personaje.subir();
      }
    }
    if (key === 'r' && ( this.estadoJuego === 1)) {
      this.estadoJuego = 0;
      for (let i = 0; i < this.cantidadEnemigos; i++) {
        this.enemigos[i] = new Enemigo (i*50);
      }
      this.personaje = new Personaje (50, 460);
    }
  }
}
