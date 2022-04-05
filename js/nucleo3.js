/* FUNCIONES NUCLEO 3*/
(function () {
  var kgDia = "1.2";
  var kgMes = "36";
  var kgAño = "432";
  var kgDiaC = "2.14";
  var kgMesC = "64.2";
  var kgAñoC = "770"; //aca agregue una C, esta bien?
  cantidadBotellasC = "";
  cantidadBotellasE = "";
  cantidadCelularesC = "";
  cantidadCelularesE = "";
  cantidadPasajerosC = "";
  cantidadPasajerosE = "";
  //tomar variables de js y utilizarlas en html mediante el id
  document.getElementById("kgAño").innerHTML = kgAño;
  document.getElementById("kgMes").innerHTML = kgMes;
  document.getElementById("kgDia").innerHTML = kgDia;
  document.getElementById("kgAñoC").innerHTML = kgAño;
  document.getElementById("kgMesC").innerHTML = kgMesC;
  document.getElementById("kgDiaC").innerHTML = kgDiaC;
  document.getElementById("cantidadBotellasC").innerHTML = cantidadBotellasC;
  document.getElementById("cantidadBotellasE").innerHTML = cantidadBotellasE;
  document.getElementById("cantidadCelularesC").innerHTML = cantidadCelularesC;
  document.getElementById("cantidadCelularesE").innerHTML = cantidadCelularesE;
  document.getElementById("cantidadPasajerosC").innerHTML = cantidadPasajerosC;
  document.getElementById("cantidadPasajerosE").innerHTML = cantidadPasajerosE;
});

/*Marca el valor inicial*/
progreso();

function progreso() {
  const controller = document.querySelector("input[type=range]");
  const radialProgress = document.querySelector(".RadialProgress");

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

  var valor = document.getElementById("progressbar");
  console.log("progreso nucleo 3");
  if (valor.ariaValueNow == "0") {
    kgDia = "0kg";
    kgMes = "0kg";
    kgAño = "0kg";
    kgDiaC = "0kg";
    kgMesC = "0kg";
    kgAñoC = "0kg";
    cantidadBotellasC = "00";
    cantidadBotellasE = "00";
    cantidadCelularesC = "00";
    cantidadCelularesE = "00";
    cantidadPasajerosC = "00";
    cantidadPasajerosE = "00";
  }
  if (valor.ariaValueNow == "30") {
    kgDia = "3.0kg";
    kgMes = "90kg";
    kgAño = "1080kg";
    kgDiaC = "6.4kg";
    kgMesC = "192kg";
    kgAñoC = "2034kg";
    cantidadBotellasC = "55";
    cantidadBotellasE = "26";
    cantidadCelularesC = "03";
    cantidadCelularesE = "1.5";
    cantidadPasajerosC = "15";
    cantidadPasajerosE = "07";
  }
  if (valor.ariaValueNow == "60") {
    kgDia = "6.0kg";
    kgMes = "180kg";
    kgAño = "2160kg";
    kgDiaC = "12.8kg";
    kgMesC = "384kg";
    kgAñoC = "4608kg";
    cantidadBotellasC = "110";
    cantidadBotellasE = "52";
    cantidadCelularesC = "06";
    cantidadCelularesE = "03";
    cantidadPasajerosC = "30";
    cantidadPasajerosE = "14";
  }
  if (valor.ariaValueNow == "90") {
    kgDia = "9.0kg";
    kgMes = "270kg";
    kgAño = "3240kg";
    kgDiaC = "19.2kg";
    kgMesC = "576kg";
    kgAñoC = "6921kg";
    cantidadBotellasC = "165";
    cantidadBotellasE = "78";
    cantidadCelularesC = "09";
    cantidadCelularesE = "4.5";
    cantidadPasajerosC = "45";
    cantidadPasajerosE = "21";
  }
  if (valor.ariaValueNow == "120") {
    kgDia = "12kg";
    kgMes = "360kg";
    kgAño = "4302kg";
    kgDiaC = "25.6kg";
    kgMesC = "768kg";
    kgAñoC = "9216kg";
    cantidadBotellasC = "220";
    cantidadBotellasE = "104";
    cantidadCelularesC = "12";
    cantidadCelularesE = "06";
    cantidadPasajerosC = "60";
    cantidadPasajerosE = "28";
  }

  //tomar variables de js y utilizarlas en html mediante el id
  document.getElementById("kgAño").innerHTML = kgAño;
  document.getElementById("kgMes").innerHTML = kgMes;
  document.getElementById("kgDia").innerHTML = kgDia;
  document.getElementById("kgAñoC").innerHTML = kgAñoC;
  document.getElementById("kgMesC").innerHTML = kgMesC;
  document.getElementById("kgDiaC").innerHTML = kgDiaC;
  document.getElementById("cantidadBotellasC").innerHTML = cantidadBotellasC;
  document.getElementById("cantidadBotellasE").innerHTML = cantidadBotellasE;
  document.getElementById("cantidadCelularesC").innerHTML = cantidadCelularesC;
  document.getElementById("cantidadCelularesE").innerHTML = cantidadCelularesE;
  document.getElementById("cantidadPasajerosC").innerHTML = cantidadPasajerosC;
  document.getElementById("cantidadPasajerosE").innerHTML = cantidadPasajerosE;
}
