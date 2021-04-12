console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del convas
canvas.width = 300;
canvas.height = 100

const ctx = canvas.getContext("2d");


let x = 0;
let y = 10;

//-- Velocidad horizontal del objeto
let velx = 3;

//-- Funcion principal de animacion
function update() 
{
  console.log("test");
//Para que rebote
  //if (x >= canvas.width) {
   // velx = -velx;}
  

   // Para que rebote tanto a la izquierda como a la derecha
   if (x < 0 || x >= (canvas.width - 20) ) {
    velx = -velx;}

  //-- Algoritmo de animacion:
  //-- 1) Actualizar posicion del  elemento
  //-- (física del movimiento rectilineo uniforme)
  x = x + velx;

  //-- 2) Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);




ctx.beginPath();
// (x,y)posicion  (largo,ancho)
ctx.rect(x, 90, 50, 10);

ctx.fillStyle="red";
//dar color
ctx.fill();
//bordes
//ctx.stroke();


ctx.closePath();
requestAnimationFrame(update);}

update();
