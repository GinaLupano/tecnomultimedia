//gina lupano
//comision 1, tp3 recuperatorio
// https://youtu.be/ANYTwFkt5Jg
int estado;

PImage[] panel = new PImage[14];
PImage inicio;
PImage creditos;
String[] texto = {
  "Guy Montag es un bombero cuyo labor es quemar libros", // 0
  "Montag habla con su vecina Clarisse, quien lo desafía \n a replantearse el propósito de  quemar libros", // 1
  "Ante la reflexión, Montag comienza a \n esconder libros en su casa", // 2
  "Montag presencia el incendio de una mujer al salvar sus libros, \n dándole más razones para replantearse su trabajo", // 3
  "Beatty, su jefe, lo visita recordándole \n el porqué de su trabajo y tratando de convencerlo", // 4
  "Indeciso en sus pensamientos, busca a Faber, \n un profesor retirado. Este último acepta ser su mentor", // 5
  "Al confrontar y matar a su jefe, Montag huye de las autoridades", // 6
  "En el camino se encuentra con un grupo llamado los desterrados, \n quienes piensan como Montag y lo aceptan en el refugio", // 7
  "Desde el refugio, Montag logra salvarse de la explosión, \n entendiendo  que su deber es divulgar la literatura \n a las futuras generaciones", // 8
  "Montag es alcanzado  y asesinado por las autoridades", // 9
  "Montag decide seguir con su trabajo aunque sea infeliz", //10
  "Montag escucha un estruendo afuera de la ciudad", // 11
  "La ciudad es destruida por una bomba,\n Montag y todos los ciudadanos mueren" // 12
};
String [] textoBotones = {"Creditos", "Seguir pensando", "Seguir al jefe", "Escapar", "Lo atrapan", "Reflexionar", "No hacerlo", "Comenzar"};

void setup() {
  size(600, 600);
  textAlign(CENTER);
  inicio = loadImage("inicio.jpg");
  creditos = loadImage("creditos.jpg");
  for (int i = 1; i < 14; i++) {
    panel[i] = loadImage("panel" + i + ".jpg");
  }
  estado = 0;
}




// Pantalla
void draw() {
  background(255);
  if (estado == 0) {
    inicio();
  } else if (estado == 1) {
    desarrollo (1, 0, 255);
    botonAdelante();
  } else if (estado == 2) {
    desarrollo (2, 1, 255);
    boton(250, 250, 100, 30, 5, 300, 270);
    boton(250, 350, 100, 30, 6, 300, 370);
  } else if (estado == 3) {
    desarrollo (3, 2, 255);
    botonAdelante();
  } else if (estado == 4) {
    desarrollo (4, 3, 255);
    botonAdelante();
  } else if (estado == 5) {
    desarrollo (5, 4, 0);
    boton(240, 250, 120, 30, 1, 300, 270);
    boton(240, 350, 120, 30, 2, 300, 370);
  } else if (estado == 6) {
    desarrollo (6, 5, 0);
    botonAdelante();
  } else if (estado == 7) {
    desarrollo (7, 6, 255);
    boton(250, 250, 100, 30, 3, 300, 270);
    boton(240, 350, 120, 30, 4, 300, 370);
  } else if (estado == 8) {
    desarrollo (8, 7, 255);
    botonAdelante();
  } else if (estado == 9) {
    desarrollo (9, 8, 255);
    boton (450, 550, 100, 30, 0, 500, 570);
  } else if (estado == 10) {
    creditos ();
  } else if (estado == 11) {
    desarrollo (11, 10, 255);
    botonAdelante ();
  } else if (estado == 12) {
    desarrollo (13, 11, 255);
    botonAdelante();
  } else if (estado == 13) {
    desarrollo (12, 12, 0);
    boton (450, 550, 100, 30, 0, 500, 570);
  } else if (estado == 14) {
    desarrollo (10, 9, 255);
    boton (450, 550, 100, 30, 0, 500, 570);
  }
}


// Funciones


void inicio () {
  image (inicio, 0, 0, width, height);
  boton (250, 270, 100, 50, 7, width/2, 300);
}

void creditos () {
  image (creditos, 0, 0, width, height);
  textSize(22);
  fill(255);
  text ("Pulse la tecla r para reiniciar", width/2, 450);
}

void desarrollo (int p, int t, int c) {
  image (panel[p], 0, 0, width, height);
  fill(c);
  textSize(22);
  text (texto[t], width/2, 50);
}

void boton (int x, int y, int l, int a, int i, int xt, int yt) {
  fill(255);
  rect (x, y, l, a);
  fill (0);
  textSize(16);
  text (textoBotones[i], xt, yt);
}


void botonAdelante() {
  fill(random(255), random(255), random(255));
  triangle (346, 320, 274, 308, 274, 332);
}


boolean mouse (int x, int x2, int y, int y2) {
  if (mouseX > x && mouseX < x2 && mouseY > y && mouseY < y2) {
    return true;
  } else {
    return false;
  }
}

//Estados

void mousePressed () {
  if (mouse(250, 350, 270, 320) && estado == 0) {
    estado = 1;
  } else if ( mouse ( 274, 346, 308, 332) && estado == 1) {
    estado = 2;
  } else if (mouse(250, 350, 250, 280) && estado == 2) {
    estado = 3;
  } else if (mouse (274, 346, 308, 332) && estado == 3) {
    estado = 4;
  } else if (mouse (274, 346, 308, 332) && estado == 4) {
    estado = 5;
  } else if (mouse (240, 360, 250, 280) && estado == 5) {
    estado = 6;
  } else if (mouse (274, 346, 308, 332) && estado == 6) {
    estado = 7;
  } else if (mouse(250, 350, 250, 280) && estado == 7) {
    estado = 8;
  } else if (mouse (274, 346, 308, 332) && estado == 8) {
    estado = 9;
  } else if (mouse(450, 550, 550, 570) && estado == 9) {
    estado = 10;
  } else if (mouse(250, 350, 350, 380) && estado == 2) {
    estado = 11;
  } else if (mouse (274, 346, 308, 332) && estado == 11) {
    estado = 12;
  } else if (mouse (274, 346, 308, 332) && estado == 12) {
    estado = 13;
  } else if (mouse(450, 550, 550, 570) && estado == 13) {
    estado = 10;
  } else if (mouse (250, 370, 350, 380) && estado == 5) {
    estado = 11;
  } else if (mouse (240, 360, 350, 380) && estado == 7) {
    estado = 14;
  } else if (mouse(450, 550, 550, 570) && estado == 14) {
    estado = 10;
  }
}

// Reinicio

void keyPressed () {
  if (estado == 10 && key == 'r') {
    estado = 0;
  }
}
