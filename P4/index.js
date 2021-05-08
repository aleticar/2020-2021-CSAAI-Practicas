console.log("Ejecutando JS....")

//-- Obtener elementos del DOM
const canvas = document.getElementById('canvas');
const img = document.getElementById('imagesrc');
const ctx = canvas.getContext('2d');

//-- Acceso al deslizador
const deslizador1 = document.getElementById('deslizador1');
const deslizador2 = document.getElementById('deslizador2');
const deslizador3 = document.getElementById('deslizador3');
//-- Valor del deslizador
const range_value1 = document.getElementById('range_value1');
const range_value2 = document.getElementById('range_value2');
const range_value3 = document.getElementById('range_value3');
grises=document.getElementById('boton1');
colores = document.getElementById('boton2');


img.onload = function () {

  //-- Se establece como tamaño del canvas el mismo
  //-- que el de la imagen original
  canvas.width = img.width;
  canvas.height = img.height;

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img, 0,0);
  console.log("Imagen lista...");

//-- Obtener el array con todos los píxeles


  
};


//-- Funcion de retrollamada del deslizador
deslizador1.oninput = () => {
  //-- Mostrar el nuevo valor del deslizador

  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  let data = imgData.data
  var umbral1 = deslizador1.value
  
  
  for (let i = 0; i < data.length; i+=4) {
    if (data[i] > umbral1){
      data[i] = umbral1;}
  
}
range_value1.innerHTML = deslizador1.value;




ctx.drawImage(img, 0,0);

//-- Obtener la imagen del canvas en pixeles

  //-- Poner la imagen modificada en el canvas
  ctx.putImageData(imgData, 0, 0);
}

deslizador2.oninput = () => {
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  let data = imgData.data
  var umbral2 = deslizador2.value
  for (let i = 0; i < data.length; i+=4) {

    if (data[i+1] > umbral2){
      data[i+1] = umbral2;
    }

  }
  range_value2.innerHTML = deslizador2.value;
  ctx.drawImage(img, 0,0);
  ctx.putImageData(imgData, 0, 0);

}

deslizador3.oninput = () => {
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  let data = imgData.data
  var umbral3 = deslizador3.value
  for (let i = 0; i < data.length; i+=4) {

    if (data[i+1] > umbral3){
      data[i+1] = umbral3;
    }

  }
  range_value3.innerHTML = deslizador3.value;
  ctx.drawImage(img, 0,0);
  ctx.putImageData(imgData, 0, 0);

}

grises.onclick = () => {
  var gris= 0;
  let imgData = ctx.getImageData(0,0,canvas.width, canvas.height);
  let data = imgData.data;
  for (let i = 0; i < data.length; i+=4) {
    gris = (3*data[i] + 4*data[i+1]+ data[i+2])/8// entre 8 para obtener la escala de grises
    data[i] = data[i+1] = data[i+2] = gris; // para que cada pixel sea igual a grises
  }
  ctx.putImageData(imgData, 0,0);
}
colores.onclick = () => {
  let imgData = ctx.getImageData(0,0,canvas.width, canvas.height);
  ctx.drawImage(img, 0,0);
}



console.log("Fin...");