// Gina Lupano
//Comision 1, tp2 recuperatorio
//https://youtu.be/l7W00IChqI0 

PImage imagen;
int cant = 5;
int c1,c2;

void setup () {
  size (800,400);
  imagen = loadImage ("imagen.png");
  c1 = 0;
  c2 = 255;
}  
  void draw() {
    background (255);
    noStroke();
    image (imagen,0,0,width/2,height);
    triangulosnegros (400,12,470,87);
    triangulosblancos (400,12,470,87);
  }
  
  
  void triangulosnegros (int x,int y1, int x2, int y2) {
    fill (c1);
    for (int i = 0; i < cant; i++ ) {
      for (int y = 0; y < cant; y ++) {
     triangle ( x + i*70,y1 + y*75,x + i*70,y2 + y*77,x2 + i*70,y2 + y *77);
      }
    }
  }
  
  void triangulosblancos (int x,int y1, int x2, int y2) {
    fill (c2);
    for ( int i = 0; i < cant; i++){
      for (int y = 0; y < cant; y ++) {
      triangle (x + i * 70, y1 + y *75,x2 + i*70,y1 + y*75,x2 + i*70,y2 + y*77);
    }
    }
  }


boolean camcolor (int x,int y) {
    if ((x == color(random(255),random(255),random(255))) && (y == color(random(255),random(255),random(255)))) {
      return true;
    } else {
      return false;
    }
}
  
  
  void mousePressed () {
      c1 = color(random(255),random(255),random(255));
      c2 = color(random (255),random(255),random(255));
  }
  
  
  void keyPressed () {
    if ( (camcolor(c1,c2) == false) && (key == 'r')) {
      c1 = 0;
      c2 = 255;
    }
  }
