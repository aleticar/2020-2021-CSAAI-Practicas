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
const range_value = document.getElementById('range_value');
const range_value2 = document.getElementById('range_value2');
const range_value3 = document.getElementById('range_value3');

//-- Función de retrollamada de imagen cargada
//-- La imagen no se carga instantaneamente, sino que
//-- lleva un tiempo. Sólo podemos acceder a ella una vez
//-- que esté totalmente cargada
img.onload = function () {

  //-- Se establece como tamaño del canvas el mismo
  //-- que el de la imagen original
  canvas.width = img.width;
  canvas.height = img.height;

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img, 0,0);

  console.log("Imagen lista...");
};


//-- Funcion de retrollamada del deslizador
deslizador1.oninput = () => {
  //-- Mostrar el nuevo valor del deslizador
  range_value.innerHTML = deslizador1.value;

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img, 0,0);

  //-- Obtener la imagen del canvas en pixeles
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  //-- Obtener el array con todos los píxeles
  let data = imgData.data

  //-- Obtener el umbral de rojo del desliador
  umbral = deslizador1.value

  //-- Filtrar la imagen según el nuevo umbral
  for (let i = 0; i < data.length; i+=4) {
    if (data[i] > umbral)
      data[i] = umbral;
  }

  //-- Poner la imagen modificada en el canvas
  ctx.putImageData(imgData, 0, 0);
}

deslizador2.oninput = () => {
  //-- Mostrar el nuevo valor del deslizador
  range_value2.innerHTML = deslizador2.value;

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img, 0,0);

  //-- Obtener la imagen del canvas en pixeles
  let imgData2 = ctx.getImageData(0, 0, canvas.width, canvas.height);

  //-- Obtener el array con todos los píxeles
  let data2 = imgData2.data

  //-- Obtener el umbral de rojo del desliador
  umbral2 = deslizador2.value

  //-- Filtrar la imagen según el nuevo umbral
  for (let i = 0; i < data2.length; i+=4) {
    if (data2[i] > umbral2)
      data2[i] = umbral2;
  }

  //-- Poner la imagen modificada en el canvas
  ctx.putImageData(imgData2, 0, 0);
}

deslizador3.oninput = () => {
  //-- Mostrar el nuevo valor del deslizador
  range_value3.innerHTML = deslizador3.value;

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img, 0,0);

  //-- Obtener la imagen del canvas en pixeles
  let imgData3 = ctx.getImageData(0, 0, canvas.width, canvas.height);

  //-- Obtener el array con todos los píxeles
  let data3 = imgData3.data

  //-- Obtener el umbral de rojo del desliador
  umbral3 = deslizador3.value

  //-- Filtrar la imagen según el nuevo umbral
  for (let i = 0; i < data3.length; i+=2) {
    if (data3[i] > umbral3)
      data3[i] = umbral3;
  }

  //-- Poner la imagen modificada en el canvas
  ctx.putImageData(imgData3, 0, 0);
}


console.log("Fin...");