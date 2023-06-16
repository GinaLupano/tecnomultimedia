//Gina Lupano
// comision 1, tp2
//https://youtu.be/IwJrdO8r9Gs 
//Para reinicir la animacion click a la tecla "R"


PImage imagen;
int x;
int i;
int y;
int j;
int ancho;
int alto;
int colorRegion; 

void setup() {
  size(800, 400);

  imagen = loadImage("imagen.png");
  background(255);
  image(imagen, 0, 0);
  y = 0;
  x = 480;
  ancho = width / 2 - 20;
  alto = height / 2 + 83;
  colorRegion = 0; 
}

void tri(int x1, int y1, int x2, int y2, int x3, int y3) {
  if (colorRegion == 1) {
    fill(224, 20, 75); 
  } else if (colorRegion == 2) {
    fill(181, 7, 245); 
  } else {
    fill(0); 
  }
  triangle(x1, y1, x2, y2, x3, y3);
}

void draw() {
  int x1 = 50;
  int x2 = 125;
  int x3 = 50;
  int y1 = 100;
  int y2 = 100;
  int y3 = 30;

  for (int i = 0; i < 5; i++) {
    for (int j = 0; j < 5; j++) {
      pushMatrix();
      translate(ancho + (i * (x2 - x3)), alto - (j * (y1 - y3)));
      tri(x1, y1, x2, y2, x3, y3);
      popMatrix();
    }
  }
}

void mouseMoved() {
  if (mouseX > width / 2 && mouseX < width) {
    if (mouseY < height / 2) {
      colorRegion = 1;
    } else {      
      colorRegion = 2; 
    }
  } 
}

void keyPressed() {
  if (key == 'r' || key == 'R') {
    colorRegion = 0; 
  }
}
