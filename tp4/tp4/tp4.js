//Gina Lupano, comsion 1 (tp4)
//LINKVIDEO: https://youtu.be/d4XM-OjUVnY

let xviborita = 0;
let yviborita = 400;
const cuadradoSize = 40;
const cuadradoSizeSmall = 20;
const canvasWidth = 800;
const canvasHeight = 800;
const cuadradosAleatorios = [];
let tiempoRestante = 60;
let movimientoComenzado = false;
let cuadradosComidos = 0;
const tiempoArray = [];
let pantalla1;
let pantalla2;
let creditosImage;
let estado;
let juegoComenzado = false;
let creditosClicked = false;
let ganador = false; 

function preload() {
  pantalla1 = loadImage('data/pantalla1.png');
  pantalla2 = loadImage('data/pantalla2.jpeg');
  creditosImage = loadImage('data/creditos.jpeg');
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  cuadradosAleatorios.length = 0;
  cuadradosComidos = 0;
  juegoComenzado = false;
  estado = 0;

  for (let i = 0; i < 150; i++) {
    const x = random(canvasWidth - cuadradoSizeSmall);
    const y = random(canvasHeight - cuadradoSizeSmall);
    const col = color(random(255), random(255), random(255));
    cuadradosAleatorios.push({ x, y, col, sigue: false, comido: false });
  }

  for (let i = 0; i < tiempoRestante; i++) {
    tiempoArray.push(i);
  }
}

function draw() {
  background(245);

  if (estado === 0) {
    image(pantalla1, 0, 0, width, height);
    fill(0);
    stroke(0);
    strokeWeight(3);
    rectMode(CENTER);
    rect(width / 2, height / 2, 200, 50);

    fill(255);
    textSize(24);
    textAlign(CENTER, CENTER);
    text("Comenzar", width / 2, height / 2);

    if (
      mouseX > width / 2 - 100 &&
      mouseX < width / 2 + 100 &&
      mouseY > height / 2 - 25 &&
      mouseY < height / 2 + 25 &&
      mouseIsPressed
    ) {
      juegoComenzado = true;
      estado = 1;
      tiempoArray.length = tiempoRestante;
    }
  } else if (estado === 1 && juegoComenzado) {
    for (const cuadrado of cuadradosAleatorios) {
      fill(cuadrado.col);
      rect(cuadrado.x, cuadrado.y, cuadradoSizeSmall, cuadradoSizeSmall);

      if (cuadrado.sigue) {
        if (xviborita < cuadrado.x) {
          cuadrado.x -= 1;
        } else if (xviborita > cuadrado.x) {
          cuadrado.x += 1;
        }
        if (yviborita < cuadrado.y) {
          cuadrado.y -= 1;
        } else if (yviborita > cuadrado.y) {
          cuadrado.y += 1;
        }
      }
    }

    fill(255);
    drawPlayer(xviborita, yviborita);

    if (movimientoComenzado) {
      textSize(40);
      fill(0);
      textAlign(LEFT, TOP);
      text(`Cuadrados comidos: ${cuadradosComidos} /150`, 10, 10);

      textSize(40);
      fill(0);
      textAlign(RIGHT, TOP);
      text(`Tiempo: ${tiempoArray.length}`, canvasWidth - 10, 10);

      if (frameCount % 60 === 0 && tiempoArray.length > 0) {
        tiempoArray.pop();
      }

   
      if (cuadradosComidos === cuadradosAleatorios.length) {
        ganador = true;
      }

      if (tiempoArray.length === 1 || ganador) {
        estado = 2;
      }
    }
  } else if (estado === 2) {
    image(pantalla2, 0, 0, width, height);

    fill(0);
    stroke(0);
    strokeWeight(3);
    rectMode(CENTER);
    rect(width / 4, height - 175, 150, 50);

    fill(255);
    textSize(18);
    textAlign(CENTER, CENTER);
    text("Créditos", width / 4, height - 175);

    fill(0);
    stroke(0);
    strokeWeight(3);
    rectMode(CENTER);
    rect((3 * width) / 4, height - 175, 150, 50);

    fill(255);
    textSize(18);
    textAlign(CENTER, CENTER);
    text("Reiniciar", (3 * width) / 4, height - 175);

    if (
      mouseX > width / 4 - 75 &&
      mouseX < width / 4 + 75 &&
      mouseY > height - 200 &&
      mouseY < height - 150 &&
      mouseIsPressed
    ) {
      estado = 3;
      creditosClicked = true;
    }

    if (
      mouseX > (3 * width) / 4 - 75 &&
      mouseX < (3 * width) / 4 + 75 &&
      mouseY > height - 200 &&
      mouseY < height - 150 &&
      mouseIsPressed
    ) {
      reiniciarJuego();
    }
  } else if (estado === 3) {
    image(creditosImage, 0, 0, width, height);

    fill(0);
    stroke(0);
    strokeWeight(3);
    rectMode(CENTER);
    rect((3 * width) / 4, height - 175, 150, 50);

    fill(255);
    textSize(18);
    textAlign(CENTER, CENTER);
    text("Inicio", (3 * width) / 4, height - 175);

    if (
      mouseX > (3 * width) / 4 - 75 &&
      mouseX < (3 * width) / 4 + 75 &&
      mouseY > height - 200 &&
      mouseY < height - 150 &&
      mouseIsPressed
    ) {
      reiniciarJuego();
    }
  }

  
  if (ganador) {
    textSize(40);
    fill(0);
    textAlign(CENTER, CENTER);
    text("¡Felicidades, ganaste!", width / 2, height / 2);
  }
}

function keyPressed() {
  if (tiempoArray.length > 0) {
    if (!movimientoComenzado) {
      movimientoComenzado = true;
    }

    if (keyCode === LEFT_ARROW && xviborita > 0) {
      xviborita -= cuadradoSize;
    } else if (keyCode === RIGHT_ARROW && xviborita + cuadradoSize < canvasWidth) {
      xviborita += cuadradoSize;
    } else if (keyCode === UP_ARROW && yviborita > 0) {
      yviborita -= cuadradoSize;
    } else if (keyCode === DOWN_ARROW && yviborita + cuadradoSize < canvasHeight) {
      yviborita += cuadradoSize;
    }

    for (const cuadrado of cuadradosAleatorios) {
      if (
        !cuadrado.comido &&
        xviborita < cuadrado.x + cuadradoSizeSmall &&
        xviborita + cuadradoSize > cuadrado.x &&
        yviborita < cuadrado.y + cuadradoSizeSmall &&
        yviborita + cuadradoSize > cuadrado.y
      ) {
        cuadrado.sigue = true;
        cuadrado.comido = true;
        cuadradosComidos++;
      }
    }
  }
}

function drawPlayer(x, y) {
  fill(255);
  rect(x, y, cuadradoSize, cuadradoSize);
}

function reiniciarJuego() {
  xviborita = 0;
  yviborita = 400;
  cuadradosComidos = 0;
  tiempoArray.length = tiempoRestante;
  movimientoComenzado = false;
  cuadradosAleatorios.length = 0;
  for (let i = 0; i < 150; i++) {
    const x = random(canvasWidth - cuadradoSizeSmall);
    const y = random(canvasHeight - cuadradoSizeSmall);
    const col = color(random(255), random(255), random(255));
    cuadradosAleatorios.push({ x, y, col, sigue: false, comido: false });
  }
  estado = 0;
  juegoComenzado = false;
  ganador = false;
  background(245);
  image(pantalla1, 0, 0, width, height);
}
