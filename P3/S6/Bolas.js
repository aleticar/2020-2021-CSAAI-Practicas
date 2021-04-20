console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del convas
canvas.width = 300;
canvas.height = 100

const ctx = canvas.getContext("2d");


let x2 = 0;
let y2 = 10;

//-- Velocidad horizontal del objeto
let velx2 = 2;
let vely2 = 2;

//-- Funcion principal de animacion
function update() 
{
  console.log("test");
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


  if (y2 <= 0 || y2 > 80) {
    vely2 = -vely2;
  }
  y2 = y2 + vely2;

  //-- 2) Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);




ctx.beginPath();
// (x,y)posicion  (largo,ancho)
ctx.arc(x2, y2, 10, 0, 2 * Math.PI);

ctx.fillStyle="red";
//dar color
ctx.fill();
//bordes
//ctx.stroke();


ctx.closePath();
requestAnimationFrame(update);}

update();
