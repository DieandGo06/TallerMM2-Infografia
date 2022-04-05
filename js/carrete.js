let carrete = document.getElementById("carrete");
let carretePosition;
let clickedPosition;
let isDown = false;
let moveDistance;
let nucleo = new Array(2);
let nucleoPositionX = new Array(nucleo.length);

let nucleoActual = 0; //Si ponen el numero del nucleo en el que trabajan, la web empieza alli

GetNucleoReference();
SetNucleosPosition();
ReubicarCarrete(); //Ubica el carrete en el "nucleoActual" al inicio

/* LISTENERS */
document.onmousedown = function (e) {
  if (estasClickeandoElCarrete(e)) isDown = true;
};
document.onmouseup = function (e) {
  isDown = false;
};
carrete.onmousemove = function (e) {
  if (isDown) {
    MoverCarrete(e);
  } else {
    GetClickedPosition(e);
    GetCarretePosition();
    CambiarNucleo();
  }
  LimitarMovimientoDelCarrete();
  console.log("nucleo " + nucleoActual);
};
//Al cambiar el tamano de la ventana
window.onresize = function (e) {
  ReubicarCarrete();
};

/* 
Metodo antiguio y simple para verificar que que presionas el click izq
carrete.onmousedown = function (e) {
  isDown = true;
};
*/

/* FUNCIONES */
//Mueve con el mouse
function MoverCarrete(_event) {
  TransicionDeMovimiento(false); //Desactiva la transicion de CSS
  let mouseX = _event.pageX;
  moveDistance = mouseX - clickedPosition;
  let newCarretePosition = carretePosition + moveDistance;
  carrete.style.left = newCarretePosition + "px";
}

//Cambia los nucleos dependiendo de que tanto muevas las pantallas
function CambiarNucleo() {
  let screenWidth = window.screen.width;

  if (moveDistance <= screenWidth * -0.2) {
    TransicionDeMovimiento(true);
    carrete.style.left = nucleoPositionX[nucleoActual + 1] + "px";
    carretePosition = nucleoPositionX[nucleoActual + 1];
    moveDistance = 0;
    nucleoActual++;
  }
  if (moveDistance >= screenWidth * 0.2) {
    TransicionDeMovimiento(true);
    carrete.style.left = nucleoPositionX[nucleoActual - 1] + "px";
    carretePosition = nucleoPositionX[nucleoActual - 1];
    moveDistance = 0;
    nucleoActual--;
  }
  if (moveDistance > screenWidth * -0.2 && moveDistance < screenWidth * 0.2) {
    TransicionDeMovimiento(true);
    carrete.style.left = nucleoPositionX[nucleoActual] + "px";
    carretePosition = nucleoPositionX[nucleoActual];
    moveDistance = 0;
  }
}

//Guarda la posicionX del mouse
function GetClickedPosition(_event) {
  clickedPosition = _event.pageX;
}
//Guarda la posicionX del carrete
function GetCarretePosition() {
  carretePosition = carrete.getBoundingClientRect().left + window.scrollX;
}

//Define la posicion determinada de los nucleos
function SetNucleosPosition() {
  for (let i = 0; i < nucleo.length; i++) {
    nucleoPositionX[i] = -window.innerWidth * i;
    //nucleoPositionX[i] = -window.screen.width * i;
    console.log(`nucleoPositionX ${i + 1} ` + nucleoPositionX[i]);
  }
}

//Busca el "id" de los nucleos
function GetNucleoReference() {
  for (let i = 0; i < nucleo.length; i++) {
    nucleo[i] = document.getElementById(`nucleo${i}`);
    console.log(`nucleo ${i} ` + nucleo[i]);
  }
}

//Genera el movimiento fluido en el cambio de nucleos
function TransicionDeMovimiento(activa) {
  //Debe activarse y desactivarse porque el efecto de transcion de CSS
  //aplica con cualquier cambio, incluyendo el movimiento dado con el mouse
  if (activa == true) carrete.style.transitionDuration = "0.5s";
  else carrete.style.transitionDuration = "0s";
}

//Evita que te desplaces antes del inicio o despues del final del carrete
function LimitarMovimientoDelCarrete() {
  let _carretePosX = carrete.getBoundingClientRect().left + window.scrollX;

  if (_carretePosX > 0) {
    carrete.style.left = 0;
    _carretePosX = 0;
  }

  let lastNucleoPosition = nucleoPositionX[nucleo.length - 1];
  if (_carretePosX < lastNucleoPosition) {
    isDown = false;
    carrete.style.left = lastNucleoPosition;
    _carretePosX = lastNucleoPosition;
  }

  if (nucleoActual < 0) nucleoActual = 0;
  if (nucleoActual > nucleo.length - 1) nucleoActual = nucleo.length - 1;
}

//Reubica y recalcula los movimientos del carrte al cambiar el tamaño de la ventana
function ReubicarCarrete() {
  console.log("Carrete Reubicado");
  SetNucleosPosition();
  carrete.style.left = nucleoPositionX[nucleoActual] + "px";
}

function estasClickeandoElCarrete(_event) {
  _tag = _event.target.tagName;
  _id = _event.target.id;
  if (_tag == "IMG") return false;

  for (let i = 0; i < nucleo.length; i++) {
    if (_id != nucleo[i] || _id == `` || _id == carrete) return true;
    break;
  }
  return false;
  //console.log(_id);
  //console.log("activado");
}
