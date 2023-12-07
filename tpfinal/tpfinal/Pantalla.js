class Pantalla {

  constructor () {
    this.imagen = new Imagenes();
    this.textoCuento = ["La señora Navárrez grita durante \n toda la noche, perturbando \ntodo el inquilinato", "Los habitantes intentan dormir,\n pero sus gritos no cesan", "La policia llega, se llevan\n a la señora Navárrez y\n volvió todo a la tranquilidad",
    "Por la mañana, la señora \nNavárrez sigue llorando y\n gritando", "Durante el día, el coro de niños\n y las lavadoras en el edificio\n suavizan un poco el ruido", "Los hombres regresan al atardecer\n  y se frustran por los\n  continuos lamentos", "Intentan hacerla callar, \npero solo logran que grite\n más fuerte",
    "Deciden cenar afuera \npara escapar del ruido", "La situación se vuelve \ninsoportable,y los vecinos\n discuten posibles soluciones", "La señora Navarréz baja a cenar\n tranquilamente y dijo que\n nada mas habia pasado por un brote psicótico", "El señor Villanazul se ofrece\n como voluntario para\n hacer el trabajo",
    "El señor Villanazul sube las\n escaleras y abre lentamente\n la puerta de la señora Navarréz", "Villanazul sin ningun tipo de\n remordimiento apreta el cuello\n de la señora hasta matarla", "Por fin hubo silencio y \nlos vecinos pudieron pasar \nla noche en paz", "Villanazul con mucha violencia\n agarra y tira a la señora\n por la ventana"];
      
  }

  dibujar (i,t,tAltura) {
    this.imagen.cargar(i);
    fill (255,0,0);
    text (this.textoCuento [t],width/2,tAltura);
  }
  
  dibujarMenu() {
    this.imagen.cargar(13);
    fill(255);
    textSize(42);
    text ("En la noche",width/2,100);
  }
  
  dibujarCreditos() {
    this.imagen.cargar(17);
    fill (255);
    text ("Autor : Ray Bradbury",width/2,270);
    text ("Alumnos : Lupano Gina, Magnarelli Franco", width/2,400);
  }
  
}
