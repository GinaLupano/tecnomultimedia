class Cuento {

  constructor() {
    this.pantalla = new Pantalla ();
    this.bot1 = new Boton(450, 200, 130, 50); // boton siguiente
    this.bot2 = new Boton (100, 350, 200, 80); // opcion 1
    this.bot3 = new Boton (350, 350, 200, 80); //opcion 2
    this.bot4 = new Boton (50, 50, 130, 50); //reiniciar
    this.bot5 = new Boton (250, 200, 100, 50); //Iniciar
    this.bot6 = new Boton (250, 300, 100, 50); // Creditos
    this.bot7 = new Boton (50, 500, 100, 50); // Volver
    this.j = new Juego();
    this.estado = 0;
    textAlign (CENTER);
    textStyle (BOLD);
  }

  display () {
    if (this.estado === 0) {
      this.pantalla.dibujarMenu();
      textSize (23);
      this.bot5.dibujar(0);
      this.bot6.dibujar(1);
    } else if (this.estado === 13) {
      this.pantalla.dibujarCreditos();
      this.bot7.dibujar(11);
    } else if (this.estado === 1) {
      this.pantalla.dibujar(1, 0, 500);
      this.bot1.dibujar(2);
    } else if (this.estado === 2) {
      this.pantalla.dibujar(2, 1, 500);
      this.bot2.dibujar(3);
      this.bot3.dibujar(4);
    } else if (this.estado === 3) {
      this.pantalla.dibujar(3, 3, 500);
      this.bot1.dibujar(2);
    } else if (this.estado === 4) {
      this.pantalla.dibujar(16, 2, 500);
      this.bot4.dibujar(5);
    } else if (this.estado === 5) {
      this.pantalla.dibujar(4, 4, 500);
      this.bot1.dibujar(2);
    } else if (this.estado === 6) {
      this.pantalla.dibujar(5, 5, 500);
      this.bot2.dibujar (6);
      this.bot3.dibujar(4);
    } else if (this.estado === 7) {
      this.pantalla.dibujar(6, 6, 500);
      this.bot1.dibujar(2);
    } else if (this.estado === 8) {
      this.pantalla.dibujar(7, 7, 500);
      this.bot1.dibujar(2);
    } else if (this.estado === 9) {
      this.pantalla.dibujar(8, 8, 500);
      this.bot2.dibujar(7);
      this.bot3.dibujar(8);
    } else if (this.estado === 10) {
      this.pantalla.dibujar(15, 9, 500);
      this.bot4.dibujar(5);
    } else if (this.estado === 11) {
      this.pantalla.dibujar(9, 10, 500);
      this.bot1.dibujar(2);
    } else if (this.estado === 12) {
      this.j.display();
      if (this.j.estadoJuego === 2) {
        this.estado = 14;
      }
    } else if (this.estado === 14) {
      textStyle (BOLD);
      this.pantalla.dibujar(10, 11, 500);
      this.bot2.dibujar(9);
      this.bot3.dibujar(10);
    } else if (this.estado === 15) {
      this.pantalla.dibujar(11, 14, 500);
      this.bot1.dibujar(2);
    } else if (this.estado === 16) {
      this.pantalla.dibujar(12, 12, 500);
      this.bot1.dibujar(2);
    } else if ( this.estado === 17) {
      this.pantalla.dibujar (14, 13, 500);
      this.bot4.dibujar(5);
      this.j.reiniciarJuego();
    }
  }

  apretarBoton () {
    if (this.bot5.presionado() && this.estado === 0) {
      this.estado = 1;
    } else if (this.bot6.presionado() && this.estado === 0) {
      this.estado = 13;
    } else if (this.bot7.presionado() && this.estado === 13) {
      this.estado = 0;
    } else if (this.bot1.presionado() && this.estado === 1) {
      this.estado = 2;
    } else if (this.bot2.presionado() && this.estado === 2) {
      this.estado = 3;
    } else if (this.bot3.presionado() && this.estado === 2) {
      this.estado = 4;
    } else if (this.bot1.presionado() && this.estado === 3) {
      this.estado = 5;
    } else if (this.bot4.presionado() && this.estado === 4) {
      this.estado = 0;
    } else if (this.bot1.presionado() && this.estado === 5) {
      this.estado = 6;
    } else if (this.bot2.presionado() && this.estado === 6) {
      this.estado = 7;
    } else if (this.bot3.presionado() && this.estado === 6) {
      this.estado = 4;
    } else if (this.bot1.presionado() && this.estado === 7) {
      this.estado = 8;
    } else if (this.bot1.presionado() && this.estado === 8) {
      this.estado = 9;
    } else if (this.bot2.presionado() && this.estado === 9) {
      this.estado = 10;
    } else if (this.bot3.presionado() && this.estado === 9) {
      this.estado = 11;
    } else if (this.bot4.presionado() && this.estado === 10) {
      this.estado = 0;
    } else if (this.bot1.presionado() && this.estado === 11) {
      this.estado = 12;
    } else if (this.bot2.presionado() && this.estado === 14) {
      this.estado = 15;
    } else if (this.bot3.presionado() && this.estado === 14) {
      this.estado = 16;
    } else if (this.bot1.presionado() && this.estado === 15) {
      this.estado = 17;
    } else if (this.bot1.presionado() && this.estado === 16) {
      this.estado = 17;
    } else if (this.bot4.presionado() && this.estado === 17) {
      this.estado = 0;
    }
  }
  
  apretarTecla () {
    this.j.funcionTecla(keyCode);
  }

  mantenerTecla () {
    this.j.teclaMantenida(keyCode);
  }
}
