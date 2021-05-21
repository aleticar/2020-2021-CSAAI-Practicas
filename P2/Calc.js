//-- Contador de clicks de boton

console.log("Ejecutando JS...");

//-- Acceder a los elementos del DOM

display = document.getElementById("display")
boton = document.getElementById("boton")
boton1 = document.getElementById("boton1")
boton2 = document.getElementById("boton2")
boton3 = document.getElementById("boton3")

boton4 = document.getElementById("boton4")
boton5 = document.getElementById("boton5")
boton6 = document.getElementById("boton6")

boton7 = document.getElementById("boton7")
boton8 = document.getElementById("boton8")
boton9 = document.getElementById("boton9")
/*delet:document.getElementById("delete"),
clear:document.getElementById("clear"),*/
boton0 = document.getElementById("boton0")
coma=document.getElementById("coma")
ans=document.getElementById("ans")

resta = document.getElementById("resta")
suma = document.getElementById("suma")
multi = document.getElementById("multi")
div = document.getElementById("div")

igual=document.getElementById("equal")
eliminar=document.getElementById("eliminar")
clear=document.getElementById("clear")
let digitos = document.getElementsByClassName("numeros")
let operaciones =document.getElementsByClassName("butto2")


const RESULT = {
  INIT: 0,
  OP1: 1,
  OPERATION: 2,
  OP2: 3,
}

//-- Variable de estado
//-- Por defecto su valor será el del estado inicial
let estado = RESULT.INIT;

function number(digito)
{
  //-- Segun el estado hacemos una cosa u otra
  if (estado == RESULT.INIT) {
    display.innerHTML = digito;
    estado == RESULT.OP1;}
  else if (estado == RESULT.OP1){
    display.innerHTML += digito;
  }else if (estado== RESULT.OPERATION) {
    display.innerHTML += digito;
    estado == RESULT.OP2;
  }else if (estado == RESULT.OP2){
    display.innerHTML += digito;
    estado == RESULT.INIT;
  }
  for (i=0; i<operaciones.length; i++){
    operaciones[i].onclick = (ev)=>{
      if(estado == RESULT.OP1){
             display.innerHTML += ev.target.value;
             estado = RESULT.OPERATION;
           }
        }
  }
}

for  ( i = 0 ;  i < digitos . length ;  i ++ ) {
  digitos [ i ] . onclick  =  ( ev )  => {
    number ( ev.target.value ) ;
  } 
}



/* numeros  = document.getElementsByClassName("numeros");

for (let boton of numeros) {

  //-- Se ejecuta cuando se pulsa un boton
  //-- que es un dígito
  boton.onclick = numeros;
  } */


boton1.onclick = () => {
  display.innerHTML += "1";
}

//-- Insertar digito 2
boton2.onclick = () => {
  display.innerHTML += "2";
}
boton3.onclick = () => {
  display.innerHTML += "3";
}

boton4.onclick = () => {
  display.innerHTML += "4";
}

//-- Insertar digitos
boton5.onclick = () => {
  display.innerHTML += "5";
}
boton6.onclick = () => {
  display.innerHTML += "6";
}

boton9.onclick = () => {
  display.innerHTML += "9";
}

boton0.onclick = () => {
  display.innerHTML += "0";
}

boton7.onclick = () => {
  display.innerHTML += "7";
}
boton8.onclick = () => {
  display.innerHTML += "8";
}

//-- Insertar simbolo de suma resta...
suma.onclick = () => {
  display.innerHTML += "+";
}

resta.onclick = () => {
  display.innerHTML += "-";
}
multi.onclick = () => {
  display.innerHTML += "*";
}


div.onclick = () => {
  display.innerHTML += "/";
}
coma.onclick = () => {
  display.innerHTML += ".";
}

//-- Evaluar operacion
igual.onclick = () => {
  display.innerHTML = eval(display.innerHTML);
}

//-- Poner a cero 
clear.onclick = () => {
  display.innerHTML = "";
}
//elimina el digito anterior
eliminar.onclick = () => {
  display.innerHTML = display.innerHTML.slice(0,-1);;
}

