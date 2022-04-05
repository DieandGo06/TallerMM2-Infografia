//Variables
let autoPartes = [
  document.getElementById("nucleo2__carroceria"),
  document.getElementById("nucleo2__motor"),
  document.getElementById("nucleo2__bateria"),
  document.getElementById("nucleo2__inversor"),
  document.getElementById("nucleo2__neumaticos"),
];

let botonAutoElectrico = document.getElementById("nucleo2__botonAutoElectrico");
let botonAutoCombustion = document.getElementById("nucleo2__botonAutoCombustion");

let eligioElectrico = true;
let estaActivadoItemElectrico = [false, false, false, false, false];
let estaActivadoItemCombustion = [false, false, false, false, false];
let nucleo2__auto = document.getElementById("nucleo2__auto");

let contaminacionElectrico = document.getElementById("contaminacionElectrico");
let contaminacionCombustion = document.getElementById("contaminacionCombustion");
let autoPartesElectricoCO2 = [4111, 1070, 6337, 641, 108];
let autoPartesCombustionCO2 = [4111, 1274, 20, 10, 108];
let co2AutoElectrico = 0;
let co2AutoCombustion = 0;

let iconosInferioresElectrico = document.getElementById("iconosInferioresElectrico");
let iconosInferioresCombustion = document.getElementById("iconosInferioresCombustion");

//-------------------- Listener --------------------
//Seleccion de auto electrico
botonAutoElectrico.onclick = function (e) {
  eligioElectrico = true;
  nucleo[1].style.backgroundColor = "#E6FBE1";
  CambiarImagen(autoPartes[1], "img/nucleo2/motorElectrico.svg");
  CambiarImagen(autoPartes[2], "img/nucleo2/bateriaElectrico.svg");
  CambiarImagen(autoPartes[3], "img/nucleo2/inversorElectrico.svg");
  ActulizarAutoPartesItems();
  CambiarAuto();
};

//Seleccion de auto a combustion
botonAutoCombustion.onclick = function (e) {
  eligioElectrico = false;
  nucleo[1].style.backgroundColor = "#FFE3DF";
  CambiarImagen(autoPartes[1], "img/nucleo2/motorCombustion.svg");
  CambiarImagen(autoPartes[2], "img/nucleo2/bateriaCombustion.svg");
  CambiarImagen(autoPartes[3], "img/nucleo2/inversorCombustion.svg");
  ActulizarAutoPartesItems();
  CambiarAuto();
};

//Seleccion de items
for (let i = 0; i < autoPartes.length; i++) {
  autoPartes[i].onclick = function (e) {
    ActivarODesactivarItem(this, i);
    ContarCO2Total();
    CambiarAuto();
    CambiarOpacidadDeIconosInferiores();
  };
}

//-------------------- Funciones --------------------
function CambiarImagen(elemento, ruta) {
  let imagen = elemento.getElementsByTagName("img")[0];
  imagen.src = ruta;
}

function CambiarFondoAutoPartes(item, colorElectrico, colorCombustion) {
  let fondoDelItem = item.getElementsByTagName("div")[0];
  if (eligioElectrico) {
    fondoDelItem.style.backgroundColor = colorElectrico;
  } else {
    fondoDelItem.style.backgroundColor = colorCombustion;
  }
}

function ActivarItem(item, index) {
  let iconos = item.getElementsByTagName("i");
  iconos[0].style.cssText = "display: none !important";
  iconos[1].style.cssText = "display: inline-block !important";
  CambiarFondoAutoPartes(item, "#84C374", "#84C374");

  if (eligioElectrico) estaActivadoItemElectrico[index] = true;
  else estaActivadoItemCombustion[index] = true;
}

function DesactivarItem(item, index) {
  let iconos = item.getElementsByTagName("i");
  iconos[0].style.cssText = "display: inline-block !important";
  iconos[1].style.cssText = "display: none !important";
  CambiarFondoAutoPartes(item, "#D1E8BA", "#FFCBC3");

  if (eligioElectrico) estaActivadoItemElectrico[index] = false;
  else estaActivadoItemCombustion[index] = false;
}

function ActivarODesactivarItem(elemento, index) {
  if (eligioElectrico) {
    if (!estaActivadoItemElectrico[index]) ActivarItem(elemento, index);
    else DesactivarItem(elemento, index);
  }
  if (!eligioElectrico) {
    if (!estaActivadoItemCombustion[index]) ActivarItem(elemento, index);
    else DesactivarItem(elemento, index);
  }
}

function ActulizarAutoPartesItems() {
  if (eligioElectrico == true) {
    for (let i = 0; i < autoPartes.length; i++) {
      if (estaActivadoItemElectrico[i]) ActivarItem(autoPartes[i], i);
      else DesactivarItem(autoPartes[i], i);
    }
  }
  if (eligioElectrico == false) {
    for (let i = 0; i < autoPartes.length; i++) {
      if (estaActivadoItemCombustion[i]) ActivarItem(autoPartes[i], i);
      else DesactivarItem(autoPartes[i], i);
    }
  }
}

function CambiarAuto() {
  if (eligioElectrico == true) {
    if (estaActivadoItemElectrico[0] == false && estaActivadoItemElectrico[4] == false)
      CambiarImagen(nucleo2__auto, "img/nucleo2/autoElectricoPlaceHolder.svg");
    else if (estaActivadoItemElectrico[0] == true && estaActivadoItemElectrico[4] == false)
      CambiarImagen(nucleo2__auto, "img/nucleo2/autoElectricoSoloCarroceria.svg");
    else if (estaActivadoItemElectrico[0] == false && estaActivadoItemElectrico[4] == true)
      CambiarImagen(nucleo2__auto, "img/nucleo2/autoElectricoSoloRuedas.svg");
    else if (estaActivadoItemElectrico[0] == true && estaActivadoItemElectrico[4] == true)
      CambiarImagen(nucleo2__auto, "img/nucleo2/autoElectricoCompleto.svg");
    botonAutoElectrico.classList.add("underline");
    botonAutoCombustion.classList.remove("underline");
  }
  if (eligioElectrico == false) {
    if (estaActivadoItemCombustion[0] == false && estaActivadoItemCombustion[4] == false)
      CambiarImagen(nucleo2__auto, "img/nucleo2/autoCombustionPlaceHolder.svg");
    else if (estaActivadoItemCombustion[0] == true && estaActivadoItemCombustion[4] == false)
      CambiarImagen(nucleo2__auto, "img/nucleo2/autoCombustionSoloCarroceria.svg");
    else if (estaActivadoItemCombustion[0] == false && estaActivadoItemCombustion[4] == true)
      CambiarImagen(nucleo2__auto, "img/nucleo2/autoCombustionSoloRuedas.svg");
    else if (estaActivadoItemCombustion[0] == true && estaActivadoItemCombustion[4] == true)
      CambiarImagen(nucleo2__auto, "img/nucleo2/autoCombustionCompleto.svg");
    botonAutoElectrico.classList.remove("underline");
    botonAutoCombustion.classList.add("underline");
  }
}

function ContarCO2Total() {
  let _co2itemsElectrico = [];
  let _co2itemsCombustion = [];
  for (let i = 0; i < autoPartes.length; i++) {
    if (estaActivadoItemElectrico[i]) _co2itemsElectrico[i] = autoPartesElectricoCO2[i];
    else _co2itemsElectrico[i] = 0;

    if (estaActivadoItemCombustion[i]) _co2itemsCombustion[i] = autoPartesCombustionCO2[i];
    else _co2itemsCombustion[i] = 0;
  }
  co2AutoElectrico =
    _co2itemsElectrico[0] +
    _co2itemsElectrico[1] +
    _co2itemsElectrico[2] +
    _co2itemsElectrico[3] +
    _co2itemsElectrico[4];

  co2AutoCombustion =
    _co2itemsCombustion[0] +
    _co2itemsCombustion[1] +
    _co2itemsCombustion[2] +
    _co2itemsCombustion[3] +
    _co2itemsCombustion[4];

  contaminacionElectrico.innerHTML = co2AutoElectrico;
  contaminacionCombustion.innerHTML = co2AutoCombustion;
}

function CambiarOpacidadDeIconosInferiores() {
  let _iconosElectrico = iconosInferioresElectrico.getElementsByTagName("img");
  let _iconosCombustion = iconosInferioresCombustion.getElementsByTagName("img");

  for (let i = 0; i < autoPartes.length; i++) {
    if (estaActivadoItemElectrico[i]) _iconosElectrico[i].style.cssText = "opacity: 1";
    else _iconosElectrico[i].style.cssText = "opacity: 0.3";
    if (estaActivadoItemCombustion[i]) _iconosCombustion[i].style.cssText = "opacity: 1";
    else _iconosCombustion[i].style.cssText = "opacity: 0.3";
  }
}

/*







*/

/*
//!PREGUNTAR A LOS PROFES. Js no esta remplazando el codigo html, si lo afecta pero no remplaza las lineas directamente
function ShowOrHide(element) {
  let mostrados = element.getElementsByClassName("mostrar");
  let ocultos = element.getElementsByClassName("ocultar");

  for (let i = 0; i < ocultos.length; i++) {
    ocultos[i].classList.add("mostrar");
    ocultos[i].classList.remove("ocultar");
  }
  for (let i = 0; i < mostrados.length; i++) {
    mostrados[i].classList.add("ocultar");
    mostrados[i].classList.remove("mostrar");
  }
  console.log(mostrados);
  console.log(ocultos);
}
autoPartes.carroceria.onclick = function (e) {
  ShowOrHide(autoPartes.carroceria);
};
*/
