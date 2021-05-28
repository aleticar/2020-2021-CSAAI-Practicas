console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");
const display = document.getElementById("display");

//-- Definir el tamaño del convas
canvas.width = 520;
canvas.height = 400;

//const raqueta = new Audio("P3_L9_pong-raqueta");
//const rebote = new Audio("P3_L9_pong-rebote");

const perder = new Audio('perder.mp3');
const ladrillo = new Audio('ladrillo.mp3');
const ambiente = new Audio('ambiente.mp3');
const rebote = new Audio('rebote.mp3');
const vida = new Audio('vida.mp3');

const ctx = canvas.getContext("2d");
boton = document.getElementById("boton");
boton2 = document.getElementById("boton2");
boton3 = document.getElementById("boton3");
boton4 = document.getElementById("boton4");
Puntos = document.getElementById("puntos");

let x = canvas.width/2.28;
let y = 390;

//-- Velocidad horizontal del objeto
let velx = 0;
let x2 = canvas.width/2;
let y2 = 350;

//-- Velocidad horizontal del objeto
let velx2 = 0;
let vely2 = 0;
//empezar
/*boton.onclick = () => {
  velx=25;
  velx2 = 2;
 vely2 = 2;
}*/
//Parar
boton2.onclick = () => {
  velx=0;
  velx2 = 0;
 vely2 = 0;
}
//Boton para mover la barra a la izquierda


const LADRILLO = {
  F: 5,  // Filas
  C: 17,  // Columnas
  w: 30,
  h: 20,
  origen_x: 40,
  origen_y: 40,
  padding: 5,
  Puntos:0,
 vidas:5,
  visible: 1,
};
const p={
  Puntos:0,
 vidas :3,
}


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
window.onkeydown = (e)=> {
  A = `Tecla: ${e.key}. Código: ${e.keyCode}`
  
  if (e.keyCode==32){
    velx=25;
    velx2 = 3;
   vely2 = 3;
   ambiente.volume=0.05;
        ambiente.play();
  }

  if(e.keyCode==37) {
    x = x - velx;
   
  }
  //Boton para mover a la derecha
  if(e.keyCode==39) {
    x = x + velx;
  }
}




//-- Funcion principal de animacion

function update() 
{
  



// (x,y)posicion  (largo,ancho)
ctx.rect(x, y, 100, 10);

ctx.fillStyle="red";
//dar color
ctx.fill();
ctx.clearRect(0, 0, canvas.width, canvas.height); 
//bordes
//ctx.stroke();

//paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight




  
  if (x < 0 || x >= (canvas.width ) ) {
    velx = -velx;}
// pareed dercha e izq
  if (x2 < 0 || x2 >= (canvas.width) ) {
    velx2 = -velx2;}
  x2 = x2 + velx2;
  if (y2 <=5){
    vely2 = -vely2;
    console.log("holaaaaa")
  }
 if (y2 <= 0|| y2 >= canvas.height-10) {
  
  
  if( y2 > y&&y2 < y+10 && x2 <x+100&&x2 > x ){
    console.log("Raqueta")
    vely2 = -vely2;
    rebote.volume=0.05;
        rebote.play();

  }
 
  else{
    p.vidas= p.vidas-1;
    console.log("vida")
    vely2 = -1.05*vely2;
    velx2 = 1.1*velx2
    vida.volume=0.05;
        vida.play();
  }
}
  

  y2 = y2 + vely2;
  /*else{
    p.vidas= p.vidas-1;
    y2 > y && y2 < y+10 && x2 > x && x2 < x+100
  }*/
  
  //-- 2) Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);


if(p.Puntos==75){
  velx=0;
  velx2 = 0;
 vely2 = 0;
 alert("Has ganado!!!");
 ambiente.volume=0.05;
        ambiente.play();

}
if(p.vidas==0){
  velx=0;
  velx2 = 0;
 vely2 = 0;
 perder.play();
 alert("Has perdido :(");

}


if (velx==25){
  ctx.beginPath;
// (x,y)posicion  (largo,ancho)
ctx.arc(x2, y2, 10, 0, 2 * Math.PI);

ctx.fillStyle="red";
//dar color
ctx.fill();
ctx.closePath;}
//bordes
//ctx.stroke();
/*var Puntuación=0;
function score(){
  ctx.font="30px arial";
  ctx.fillStyle="black";
  

}*/
ctx.beginPath;
ctx.font="20px arial"
ctx.fillStyle="black" 
ctx.fillText(("Puntos:" +p.Puntos),0,250)
ctx.fillText(("Vidas:" +p.vidas),0,280)
ctx.closePath;

for (let i = 0; i < LADRILLO.F; i++) {
  for (let j = 0; j < LADRILLO.C; j++) {

    //-- Si el ladrillo es visible se pinta
    if (ladrillos[i][j].visible==1) {
      
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
      var estado = ladrillos[i][j];
      if(ladrillos[i][j].visible == 1){
        
      if( y2 > estado.y && y2 < estado.y+LADRILLO.w && x2 > estado.x && x2 < estado.x+LADRILLO.h ) {
        vely2 = -vely2;
        
        y2 = y2 + vely2;
        
        
        ladrillos[i][j].visible = 0;
        p.Puntos= p.Puntos +1;
        ladrillo.volume=0.05;
        ladrillo.play();
        console.log(p.Puntos);

       
    /*if(ladrillos[i][j].visible=true){
      if(ladrillos[i][j]==x2){
        ladrillos[i][j].visible = false;

      }*/
      //

      //velx2 = -velx2;
      //vely2 = -vely2;
    }

    }

  }
}
requestAnimationFrame(update);
}

update();



