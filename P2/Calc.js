//-- Contador de clicks de boton

console.log("Ejecutando JS...");

//-- Acceder a los elementos del DOM

display = document.getElementById("display")
boton = document.getElementById("boton")
boton1 = document.getElementById("boton1")
boton2 = document.getElementById("boton2")
/*delet:document.getElementById("delete"),
clear:document.getElementById("clear"),*/
exp=document.getElementById("exp")
ans=document.getElementById("ans")

suma = document.getElementById("suma")
igual=document.getElementById("equal")
delet=document.getElementById("delete")
clear=document.getElementById("clear")

numeros  = document.getElementsByClassName("numeros");

const ESTADO = {
  INIT: 0,
  OP1: 1,
  OPERATION: 2,
  OP2: 3,
}


for (let boton of numeros) {

  //-- Se ejecuta cuando se pulsa un boton
  //-- que es un dígito
  boton.onclick = (ev) => {
      display.innerHTML += ev.target.value;
      console.log("Numero");
  }
}

boton1.onclick = () => {
  display.innerHTML += "1";
}

//-- Insertar digito 2
boton2.onclick = () => {
  display.innerHTML += "2";
}

//-- Insertar simbolo de sumar
suma.onclick = () => {
  display.innerHTML += "+";
}

//-- Evaluar la expresion
igual.onclick = () => {
  display.innerHTML = eval(display.innerHTML);
}

//-- Poner a cero la expresion
clear.onclick = () => {
  display.innerHTML = "0";
}





//posiciones
/*
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
      operar(ev.target.value);
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
    if(resultado == RESULT.numero1 ||  resultado == RESULT.numero2){
       display.innerHTML = eval(display.innerHTML);
       resultado = RESULT.numero1;
     }
   }
   
   // Borrar 
   clear.onclick = () => {
    display.innerHTML = "0";
  }
   
   //Reiniciar a 0
   /*igual.onclick = () => {
     display.innerHTML = "0";
       console.log("clear");
       resultado = RESULT.Inicio;
   }*/