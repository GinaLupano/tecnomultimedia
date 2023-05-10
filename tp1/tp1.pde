// Gina Lupano.
// tp1, comision 1.



PFont font;
PImage img1;
PImage img2;
PImage img3;
int contador;
int tamañoLetra;
int izqDer;
String texto;
int y;
int x;
boolean mostrarBoton = false;

void setup() {
  size(640,480);
  img1 = loadImage("bariloche1.jpg");
  img2 = loadImage("bariloche2.jpg");
  img3 = loadImage("bariloche3.jpg");
  
  contador = 0;
  tamañoLetra = 10;
  izqDer = 10;
  y = 10;
  x = 0;
  
  texto = "Bariloche 2023";
  textSize(32);
  
  font = loadFont("ArialNarrow-Italic-32.vlw");
  textFont(font,32);
}


void draw () {
  background(255);
  contador ++;
  
  // PANTALLA 1
  if(contador < 300){
    fill(0); 
    image(img1,0,0);
    textAlign(CENTER);
    text("¡Bariloche 2023, veni a conocernos!",width/2,y);
    y++;
    if (y > 200){
      y = 200; }
  }
  
  // PANTALLA 2
  else if (contador > 300 && contador < 600){
    fill(0);
    image(img2,0,0);
    textAlign(CENTER);
    text("Paisajes increibles",x,80);
    x++;
  }
  
  // PANTALLA 3
  else if (contador > 600 && contador < 900){
    fill(0);
    image(img3,-250,-150);
    textAlign(CENTER);
    text("¡No te lo podes perder!", width/2,80);
    if (contador > 750) { 
      textSize(tamañoLetra);
      if (tamañoLetra < 70) {
        tamañoLetra++; 
      }
    }
    
    if (contador > 800) { 
      mostrarBoton = true;
      fill(255,0,0);
      rect(10, 10, 100, 50);
      fill(255);
      textAlign(CENTER, CENTER);
      textSize(20);
      text("Reiniciar", 60, 35);
    }
  }
}


void mouseClicked() {
  if (mostrarBoton && mouseX >= 10 && mouseX <= 110 && mouseY >= 10 && mouseY <= 60) {
    contador = 0;
    tamañoLetra = 10;
    izqDer = 10;
    y = 10;
    x = 0;
    mostrarBoton = false;
  }
}
