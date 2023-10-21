class Contador {
  constructor() {
    this.segundos = 60;
    this.total = 100;
    this.guardados = 0;
  }
  
  dibujarTiempo () {
    textSize (20);
    text ("Tiempo:" + this.segundos,505,30);
    if (frameCount % 60 === 0) {
      this.segundos --;
    }
  }
  
  dibujarLibrosGuardados () {
    textSize(20);
    text ("Libros recogidos:" +this.guardados+" /" +this.total,5,30);
  }
  
  sumaLibro () {
    this.guardados ++;
  }
  
  ganar (){
    if (this.guardados = this.total){
      return true;
    }
   
  }
  perder (){
    if (this.segundos <= 0 && this.guardados < this.total){
      return true;
    }
  }
}
