//----- Obtener elemento de video y configurarlo
let directo = document.getElementById("directo");
const video1 = document.getElementById("video1");
const video2 = document.getElementById("video2");
const btn_video1 = document.getElementById("btn_video1");
const btn_test = document.getElementById("btn_test");
const btn_src_on = document.getElementById("btn_src_on");
const btn_src_off = document.getElementById("btn_src_off");

//-- Establecer las dimensiones de los vídeos
directo.width=840;
directo.height=400;
video1.width=400;  
video1.height=200;
video2.width=400;  
video2.height=200;
url1="https://github.com/aleticar/videos/raw/main/BLOOPERS%20NBA%20-%20STEPHEN%20CURRY%20EN%201%20MINUTO%20(1).mp4";
url2="https://github.com/aleticar/videos/raw/main/BLOOPERS%20NBA_%20LeBron%20James%20en%201%20minuto%20(1).mp4"
//-- Imagen de Test usada
const TEST_IMAGE_URL = "test.png";
const señal = new Audio('videoplayback.m4a');

//-- Imagen estática a mostrar cuando el video no
//-- ha arrancado
directo.poster = TEST_IMAGE_URL;
video1.poster = TEST_IMAGE_URL;
video2.poster = TEST_IMAGE_URL;


btn_src_off.onclick = () => {
 
    //-- Establecer la fuente de la cámara 1
    directo.poster = TEST_IMAGE_URL;
    directo.src = null;
    video1.poster=TEST_IMAGE_URL;
    video1.src = null;
    video2.poster=TEST_IMAGE_URL;
    video2.src = null;
    señal.volume=0.05;
        señal.play();
  };



//-- Boton de FUENTES-ON
btn_src_on.onclick = () => {
 
  //-- Establecer la fuente de la cámara 1
  video1.src=url1;
  video2.src=url2;

  //-- Reprodeucimos un vídeo, desde el comienzo
  video1.currentTime = 0;
  video1.play();

  video2.currentTime = 0;
  video2.play();


  //-- Y en silencio...
  video1.muted=true;
  video2.muted=true;

  //-- En la emisión en directo ponemos la imagen de prueba
  directo.poster = TEST_IMAGE_URL;
};

//-- Botón de Test
btn_test.onclick = () => {
    directo.poster = TEST_IMAGE_URL;
    directo.src = null;
};

//-- Botón de Selección de la cámara 1
btn_video1.onclick = () => {
    
        
    directo.src = video1.src;
    directo.currentTime = video1.currentTime;
    directo.play();
    
};
btn_video2.onclick = () => {
    
        
    directo.src = video2.src;
    directo.currentTime = video2.currentTime;
    directo.play();
    
};