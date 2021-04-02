//-- Contador de clicks de boton

console.log("Ejecutando JS...");

//-- Acceder a los elementos del DOM
const OPCIONES={
display : document.getElementById("display"),
boton : document.getElementById("boton"),
delet:document.getElementById("delete"),
clear:document.getElementById("clear"),
exp:document.getElementById("exp"),
ans:document.getElementById("ans"),
igual:document.getElementById("equal")
}

let numeros  = document.getElementsByClassName("numeros");

const RESULT={
Inicio:0,
numero1:1,
operacion:2,
numero2:3,
}

let resultado=RESULT.Inicio;
//-- Manejador de posiciones
function operar(digito){
    //depeende de lo que llegue a la funcion opera de una manera u otra
    if (resultado == RESULT.Inicio) {
        display.innerHTML = digito;
        resultado == RESULT.numero1;
      }else if (resultado == RESULT.numero1){
        display.innerHTML += digito;
      }else if (resultado == RESULT.operacion) {
        display.innerHTML += digito;
        resultado == RESULT.numero2;
      }else if (resultado == RESULT.numero2){
        display.innerHTML += digito;
      }

}

//Bucle
for (i=0; i<numeros.length; i++){
    numeros[i].onclick = (ev)=>{
      resultado(ev.target.value);
    }
  }
  
  let opera = document.getElementsByClassName("operador");
  //bucle de operaciones
  for (i=0; i<opera.length; i++){
    opera[i].onclick = (ev)=>{
      if(resultado == RESULT.numero1){
             display.innerHTML += ev.target.value;
             resultado = RESULT.operacion;
           }
        }
  }
  
  
  //coger el digito del boton
  igual.onclick = () => {
    if(resultado == RESULT.OP1 ||  resultado == RESULT.OP2){
       display.innerHTML = eval(display.innerHTML);
       resultado = RESULT.OP1;
     }
   }
   
   // Borrar 
   delet.onclick = () => {
     display.innerHTML = display.innerHTML.slice(0,-1);
   }
   
   //Reiniciar a 0
   clear.onclick = () => {
     display.innerHTML = "0";
       console.log("clear");
       resultado = RESULT.INIT;
   }