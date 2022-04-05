let ventajasContainer = document.getElementById("ventajas-container");
let desventajasContainer = document.getElementById("desventajas-container");

let ventajas = [
  document.getElementById("ventaja1"),
  document.getElementById("ventaja2"),
  document.getElementById("ventaja3"),
  document.getElementById("ventaja4"),
  document.getElementById("ventaja5"),
  document.getElementById("ventaja6"),
  document.getElementById("ventaja7"),
];
let desventajas = [
  document.getElementById("desventaja1"),
  document.getElementById("desventaja2"),
  document.getElementById("desventaja3"),
  document.getElementById("desventaja4"),
];

let eligioVentajas = true;
let numeroVentajaActivo = 0;
let numeroDesventajaActivo = 0;
let ventajasBoton = document.getElementById("nucleo4__ventajas");
let desventajasBoton = document.getElementById("nucleo4__desventajas");

/*


*/
/* LISTENERS */
//Seleccion de auto electrico
ventajasBoton.onclick = function (e) {
  eligioVentajas = true;
  nucleo[4].style.backgroundColor = "#E6FBE1";
  nucleo[4].style.backgroundImage = "url('img/nucleo4/fondo-ventajas.svg')";

  ventajasContainer.classList.remove("ocultar");
  desventajasContainer.classList.add("ocultar");
  for (let i = 0; i < desventajas.length; i++) {
    desventajas[i].style.display = "none"; //Ocultar desventaja
  }
  ventajas[numeroVentajaActivo].style.display = `flex`;
  ventajasBoton.classList.add("underline");
  desventajasBoton.classList.remove("underline");
};

desventajasBoton.onclick = function (e) {
  eligioVentajas = false;
  nucleo[4].style.backgroundColor = "#FFE3DF";
  nucleo[4].style.backgroundImage = "url('img/nucleo4/fondo-desventajas.svg')";

  ventajasContainer.classList.add("ocultar");
  desventajasContainer.classList.remove("ocultar");
  for (let i = 0; i < ventajas.length; i++) {
    ventajas[i].style.display = "none";
  }
  desventajas[numeroDesventajaActivo].style.display = `flex`;
  ventajasBoton.classList.remove("underline");
  desventajasBoton.classList.add("underline");
};

/*


*/
/*Funciones*/
function MostrarVentaja(numeroVentaja) {
  botones = ventajasContainer.getElementsByClassName("nucleo4__opciones__item");

  for (let i = 0; i < ventajas.length; i++) {
    if (i == numeroVentaja - 1) {
      ventajas[i].style.display = `flex`;
      botones[i].classList.add("item-verde");
      numeroVentajaActivo = i;
      console.log(numeroVentajaActivo);
    } else {
      ventajas[i].style.display = "none";
      botones[i].classList.remove("item-verde");
    }
  }
}

function MostrarDesventaja(numeroVentaja) {
  botones = desventajasContainer.getElementsByClassName("nucleo4__opciones__item");

  for (let i = 0; i < desventajas.length; i++) {
    if (i == numeroVentaja - 1) {
      desventajas[i].style.display = `flex`;
      botones[i].classList.add("item-rojo");
      numeroDesventajaActivo = i;
      console.log(numeroDesventajaActivo);
    } else {
      desventajas[i].style.display = "none";
      botones[i].classList.remove("item-rojo");
    }
  }
}

/*funciones de la barra de progreso */

function cambiarCantidadAutos() {
  // setearDatos();
  /* FUNCIONES NUCLEO 3*/
  const controller = document.getElementById("barraProgreso");
  const radialProgress = document.getElementById("progressbar2");

  const setProgress = (progress) => {
    const value = `${progress}`;
    radialProgress.style.setProperty("--progress", value);
    radialProgress.innerHTML = value;
    radialProgress.setAttribute("aria-valuenow", value);
  };

  setProgress(controller.value);

  controller.oninput = () => {
    setProgress(controller.value);
  };

  var valor = document.getElementById("progressbar2");
  console.log("progreso nucleo" + valor.ariaValueNow);

  if (valor.ariaValueNow == "0") {
    cO2Combustion = "0";
    cO2Electrico = "0";
  }
  if (valor.ariaValueNow == "100") {
    cO2Combustion = "4.900.000";
    cO2Electrico = "3.900.000";
  }
  if (valor.ariaValueNow == "500") {
    cO2Electrico = "19.500.000";
    cO2Combustion = "24.500.000";
  }
  if (valor.ariaValueNow == "900") {
    cO2Electrico = "39.000.000";
    cO2Combustion = "49.000.000";
  }

  //tomar variables de js y utilizarlas en html mediante el id
  document.getElementById("cO2Electrico").innerHTML = cO2Electrico;
  document.getElementById("cO2Combustion").innerHTML = cO2Combustion;
}

function cambiarTiempoCarga() {
  // setearDatos();
  /* FUNCIONES NUCLEO 3*/
  const controller = document.getElementById("barraProgreso2");
  const radialProgress = document.getElementById("progressbar3");

  const setProgress = (progress) => {
    const value = `${progress}`;
    radialProgress.style.setProperty("--progress", value);
    radialProgress.innerHTML = value;
    radialProgress.setAttribute("aria-valuenow", value);
  };

  setProgress(controller.value);

  controller.oninput = () => {
    setProgress(controller.value);
  };

  var valor = document.getElementById("progressbar3");
  console.log("progreso nucleo" + valor.ariaValueNow);

  if (valor.ariaValueNow == "0") {
    valorCarga = "Nivel de carga: 0 %";
  }
  if (valor.ariaValueNow == "90") {
    valorCarga = "Nivel de carga: 30 %";
  }
  if (valor.ariaValueNow == "180") {
    valorCarga = "Nivel de carga: 50 %";
  }
  if (valor.ariaValueNow == "270") {
    valorCarga = "Nivel de carga: 70 %";
  }
  if (valor.ariaValueNow == "360") {
    valorCarga = "Nivel de carga: 100 %";
  }

  //tomar variables de js y utilizarlas en html mediante el id
  document.getElementById("valorCarga").innerHTML = valorCarga;
}

/*


*/
cambiarCantidadAutos();
cambiarTiempoCarga();
