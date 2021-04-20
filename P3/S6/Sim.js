console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");
const display = document.getElementById("display");
//-- Definir el tamaño del convas
canvas.width = 300;
canvas.height = 100

const raqueta = new Audio("P3_L9_pong-raqueta");
const rebote = new Audio("P3_L9_pong-rebote");


const ctx = canvas.getContext("2d");
boton = document.getElementById("boton")

let x = 120;
let y = 10;

//-- Velocidad horizontal del objeto
let velx = 0;
let x2 = 145;
let y2 = 50;

//-- Velocidad horizontal del objeto
let velx2 = 0;
let vely2 = 0;

//-- Funcion principal de animacion
function update() 
{
 
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




ctx.beginPath();
// (x,y)posicion  (largo,ancho)
ctx.rect(x, 90, 50, 10);

ctx.fillStyle="red";
//dar color
ctx.fill();
//bordes
//ctx.stroke();

ctx.closePath();




  if (y2 <= 0 || y2 > 80) {
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


ctx.closePath();
requestAnimationFrame(update);}

update();

