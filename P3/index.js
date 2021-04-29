console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");
const display = document.getElementById("display");

//-- Definir el tamaño del convas
canvas.width = 800;
canvas.height = 400;

//const raqueta = new Audio("P3_L9_pong-raqueta");
//const rebote = new Audio("P3_L9_pong-rebote");


const ctx = canvas.getContext("2d");
boton = document.getElementById("boton");
boton2 = document.getElementById("boton2");
boton3 = document.getElementById("boton3");
boton4 = document.getElementById("boton4");

let x = canvas.width/2.28;
let y = 100;

//-- Velocidad horizontal del objeto
let velx = 0;
let x2 = canvas.width/2;
let y2 = 350;

//-- Velocidad horizontal del objeto
let velx2 = 0;
let vely2 = 0;
//empezar
boton.onclick = () => {
  velx=25;
  velx2 = 2;
 vely2 = 2;
}
//Parar
boton2.onclick = () => {
  velx=0;
  velx2 = 0;
 vely2 = 0;
}
//Boton para mover la barra a la izquierda
boton3.onclick = () => {
  x = x - velx;
  console.log("Izquierda")
}
//Boton para mover a la derecha
boton4.onclick = () => {
  x = x + velx;
}


const LADRILLO = {
  F: 5,  // Filas
  C: 23,  // Columnas
  w: 30,
  h: 20,
  origen_x: 40,
  origen_y: 40,
  padding: 5,

  visible: true
};


const ladrillos = [];
  
for (let i = 0; i < LADRILLO.F; i++) {
  ladrillos[i] = [];
  for (let j = 0; j < LADRILLO.C; j++) {
    ladrillos[i][j] = {
        x: (LADRILLO.w + LADRILLO.padding) * j,
        y: (LADRILLO.h + LADRILLO.padding) * i,
        w: LADRILLO.w,
        h: LADRILLO.h,
        padding: LADRILLO.padding,
        visible: LADRILLO.visible,
      };
  }
}



//-- Funcion principal de animacion

function update() 
{
  
  //-- Estructura de los ladrillos
 

  
  //-- Dibujar ladrillos
  
  
//Para que rebote
  //if (x >= canvas.width) {
   // velx = -velx;}
  

   // Para que rebote tanto a la izquierda como a la derecha
   if (x < 0 || x >= (canvas.width - 20) ) {
    velx = -velx;}

    
  //-- Algoritmo de animacion:
  //-- 1) Actualizar posicion del  elemento
  //-- (física del movimiento rectilineo uniforme)
  //x = x + velx;



//-- Funcion principal de animacion

  
//Para que rebote
  //if (x >= canvas.width) {
   // velx = -velx;}
  

   // Para que rebote tanto a la izquierda como a la derecha
   if (x2 < 0 || x2 >= (canvas.width - 20) ) {
    velx2 = -velx2;}

  //-- Algoritmo de animacion:
  //-- 1) Actualizar posicion del  elemento
  //-- (física del movimiento rectilineo uniforme)
  x2 = x2 + velx2;


  //-- 2) Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);





// (x,y)posicion  (largo,ancho)
ctx.rect(x, 390, 100, 10);

ctx.fillStyle="red";
//dar color
ctx.fill();
//bordes
//ctx.stroke();






  if (y2 <= 0 || y2 > canvas.height-10) {
    vely2 = -vely2;
  }
  y2 = y2 + vely2;
  
  //-- 2) Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);





// (x,y)posicion  (largo,ancho)
ctx.arc(x2, y2, 10, 0, 2 * Math.PI);

ctx.fillStyle="red";
//dar color
ctx.fill();
//bordes
//ctx.stroke();




for (let i = 0; i < LADRILLO.F; i++) {
  for (let j = 0; j < LADRILLO.C; j++) {

    //-- Si el ladrillo es visible se pinta
    if (ladrillos[i][j].visible) {
      ctx.beginPath();
      ctx.rect(ladrillos[i][j].x, ladrillos[i][j].y, LADRILLO.w, LADRILLO.h);
      ctx.fillStyle = 'green';
      ctx.fill();
      ctx.closePath();
    }
  }
}
//Romper ladrillos
for (let i = 0; i < LADRILLO.F; i++) {
  for (let j = 0; j < LADRILLO.C; j++) {
    

  }
}
requestAnimationFrame(update);
}

update();



//-- Constantes de los ladrillos
