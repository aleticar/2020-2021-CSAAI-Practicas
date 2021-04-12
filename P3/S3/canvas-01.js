console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del convas
canvas.width = 300;
canvas.height = 100

const ctx = canvas.getContext("2d");





ctx.beginPath();
// (x,y)posicion  (largo,ancho)
ctx.rect(0, 90, 50, 10);

ctx.fillStyle="red";
//dar color
ctx.fill();
//bordes
//ctx.stroke();


ctx.closePath();