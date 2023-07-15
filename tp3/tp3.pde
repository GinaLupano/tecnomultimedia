
//gina lupano
//comision 1, tp 3
//link video: https://youtu.be/q7UspoIAjo4 
// tecla "r" para reiniciar el cuento
boolean pasarImagen = false;
boolean finalAlternativo = false;
boolean finalAlternativo2 = false;
boolean finalAlternativo3 = false;
boolean creditosActivo = false;

int indiceImagen = 0;
PImage[] panel = new PImage[14];

PImage inicio;
PImage creditos;

int  ancho = 120;
int  alto = 40;
int   x = 250;
int   y = 300;
float radio = 50;

String des1; 
String des2;
String[] texto = {
  "Guy Montag es un bombero cuyo labor es quemar libros", // 0
  "Montag habla con su vecina Clarisse, quien lo desafía \n a replantearse el propósito de  quemar libros", // 1      
  "Ante la reflexión, Montag comienza a \n esconder libros en su casa", // 2
  "Montag presencia el incendio de una mujer al salvar sus libros, \n dándole más razones para replantearse su trabajo", // 3
  "Beatty, su jefe, lo visita recordándole \n el porqué de su trabajo y tratando de convencerlo", // 4
  "Indeciso en sus pensamientos, busca a Faber, \n un profesor retirado. Este último acepta ser su mentor",// 5
  "Al confrontar y matar a su jefe, Montag huye de las autoridades", // 6
  "En el camino se encuentra con un grupo llamado los desterrados, \n quienes piensan como Montag y lo aceptan en el refugio", // 7
  "Desde el refugio, Montag logra salvarse de la explosión, \n entendiendo  que su deber es divulgar la literatura \n a las futuras generaciones", // 8
  "Montag es alcanzado \n y asesinado por las autoridades", // 9
  "Montag decide seguir con su trabajo aunque sea infeliz", //10
  "Montag escucha un estruendo afuera de la ciudad", // 11
  "La ciudad es destruida por una bomba,\n Montag y todos los ciudadanos mueren" // 12
};


void setup() { 
  size(600, 600);
  textAlign(CENTER);
  
  inicio = loadImage("inicio.jpg");
  creditos = loadImage("creditos.jpg");
  
  for (int i = 1; i < 14; i++) {
    panel[i] = loadImage("panel" + i + ".jpg");
  }
}




// Pantalla
void draw() {
  background(255);
if (pasarImagen) {
  
    if(panel[indiceImagen] == panel[1]){
      image(panel[1], 0, 0, width, height);
      textSize(25);
      fill(255);
      text(texto[0], width/2, 20);
      botonAdelante();
    }
    
    if (panel[indiceImagen] == panel[2]) {
      image(panel[2],0,0,width,height);
      textSize(20);
      fill(255);
      text(texto[1], width/2, 40);
      botonDecision("Reflexionar","No hacerlo");   
        if(finalAlternativo){
          image(panel[10],0,0,width,height);
           textSize(25);
           fill(255);
           text(texto[10],width/2, 40);
           botonContinuar();
          if(finalAlternativo2){
               image(panel[12],0,0,width,height);
               textSize(25);
               fill(255);
               text(texto[12],width/2, 30);
               botonContinuar();
        if(finalAlternativo2){
          image(creditos,0,0);
          creditosActivo = true;
          }
         } 
        }
       }
    
    
    if(panel[indiceImagen] == panel[3]) {
      image(panel[3], 0, 0, width, height);
      textSize(25);
      fill(255);
      text(texto[2], width/2, 30);
      botonAdelante();
    }
    
    
    if(panel[indiceImagen] == panel[4]) {
      image(panel[4],0,0,width,height);
      textSize(22);
      fill(255);
      text(texto[3], width/2, 30);
      botonAdelante();   
    }
    
    
 
    if(panel[indiceImagen] == panel[5]) {
      image(panel[5],0,0,width,height);
      textSize(20);
      fill(0);
      text(texto[4], width/2, 40);
      botonDecision("Seguir pensando","Seguir al jefe");
      if(finalAlternativo){
          image(panel[10],0,0,width,height);
           textSize(25);
           fill(255);
           text(texto[10],width/2, 40);
           botonContinuar();
          if(finalAlternativo2){
               image(panel[12],0,0,width,height);
               textSize(25);
               fill(255);
               text(texto[12],width/2, 30);
               botonContinuar();
         if(finalAlternativo2){
          image(creditos,0,0);
          creditosActivo = true;
        }
       } 
      }
     }
    
    if(panel[indiceImagen] == panel[6]) {
      image(panel[6],0,0,width,height);
      textSize(25);
      fill(255);
      text(texto[5], width/2, 30);
      botonAdelante();      
    }
    
    if(panel[indiceImagen] == panel[7]) {
      image(panel[7],0,0,width,height);
      textSize(20);
      fill(255);
      text(texto[6], width/2, 40);
      botonDecision("Escapar","Lo atrapan");   
      if(finalAlternativo){
            image(panel[13],0,0,width,height);
            fill(0);
            textSize(26);
            text(texto[9],width/2, 40);
            botonContinuar();
            if(finalAlternativo2){
              image(creditos,0,0);
              creditosActivo = true;
            }  
        }
    }
    
    if(panel[indiceImagen] == panel[8]) {
      image(panel[8],0,0,width,height);
      textSize(22);
      fill(255);
      text(texto[7], width/2, 30);
      botonAdelante();      
    }
    
    if(panel[indiceImagen] == panel[9]) {
      image(panel[9],0,0,width,height);
      textSize(22);
      fill(255);
      text(texto[8], width/2, 50);
      botonAdelante();     
    }
    
     if (panel[indiceImagen] == panel[10]) {
     image(creditos, 0, 0, width, height);
    }
    
  } else {
    image(inicio, 0, 0, width, height);
    BotonInicio(width/2 - 50, height/2 - 25, 100, 50);
  }

}


// Reinicio
void keyPressed() {
  if (((panel[indiceImagen] == panel[10]) || creditosActivo  ) && (key == 'r')) {
    pasarImagen = false;
    finalAlternativo = false;
    indiceImagen = 0;
  }
}


// Botones
void botonContinuar() {
  fill(255);
  rect(width - 150, height - 80, 120, 40, radio);
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(16);
  text("Continuar", width - 90, height - 60);
  
}

void botonAdelante(){
  fill(0);
  triangle(x + ancho * 0.8, y + alto * 0.5,
             x + ancho * 0.2, y + alto * 0.2,
             x + ancho * 0.2, y + alto * 0.8);
}

void botonDecision(String des1, String des2 ){
   fill(255);
    rect(x, y, ancho, alto, radio);
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(16);
    text(des1, x, y, ancho, alto);

    fill(255);
    rect(x, y + alto * 2, ancho, alto, radio);
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(16);
    text(des2, x, y + alto * 2, ancho, alto);

}

void BotonInicio(int x, int y, int ancho, int alto) {
  if (mouseX >= x && mouseX <= x + ancho && mouseY >= y && mouseY <= y + alto) {
    fill(255, 0, 0);
    rect(x, y, ancho, alto);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(16);
    text("Comenzar", x + ancho/2, y + alto/2);
  } else {
    fill(200);
    rect(x, y, ancho, alto);
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(16);
    text("Comenzar", x + ancho/2, y + alto/2);
  }
}

void mouseEntered() {
  redraw(); 
}

void mouseExited() {
  redraw(); 
}


// Interacciones
void mouseClicked() {
   if (indiceImagen == 0 && mouseX >= width/2 - 50 && mouseX <= width/2 + 50 && mouseY >= height/2 - 25 && mouseY <= height/2 + 25) {
      pasarImagen = true;
      indiceImagen = 1;
    } 
    
   else if (mouseX > x && mouseX < x + ancho &&
          mouseY > y && mouseY < y + alto) {;
          indiceImagen = (indiceImagen + 1) % panel.length;
    }   
    
  else if (mouseX > x && mouseX < x + ancho &&
          mouseY > y + alto * 2 && mouseY < y + alto * 3){
    finalAlternativo = true;
   }  
   
   if (mouseX > width - 150 && mouseX < width - 30 &&
      mouseY > height - 80 && mouseY < height - 40) {
         finalAlternativo2 = true;
      } 
 }
