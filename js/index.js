;

/* FUNCIONES NUCLEO 1*/
function agregarPlug() {
  if ((document.getElementById("plugCarga").style.display = "none")) {
    document.getElementById("plugCarga").style.display = "flex";
    document.getElementById("infoModosDeCarga").style.display = "flex";
    document.getElementById("auto_cuerpo").style.display = "none";
    document.getElementById("auto_plug").style.display = "flex";
    document.getElementById("auto_plug_bateria").style.display = "none";
    document.getElementById("auto_plug_bateria_motor").style.display = "none";
    document.getElementById("texto_plug_nucleo1").style.visibility = "visible";
    document.getElementsByClassName("nucleo1__item")[0].style.backgroundColor = "#84C374";
  } else if ((document.getElementById("plugCarga").style.display = "flex")) {
    document.getElementById("plugCarga").style.display = "none";
  }
}
function agregarBateria() {
  if ((document.getElementById("bateriaLitio").style.display = "none")) {
    document.getElementById("bateriaLitio").style.display = "flex";
    document.getElementById("auto_cuerpo").style.display = "none";
    document.getElementById("auto_plug").style.display = "none";
    document.getElementById("auto_plug_bateria").style.display = "flex";
    document.getElementById("auto_plug_bateria_motor").style.display = "none";
    document.getElementById("texto_bateria_nucleo1").style.visibility = "visible";
    document.getElementsByClassName("nucleo1__item")[1].style.backgroundColor = "#84C374";
  } else {
    document.getElementById("bateriaLitio").style.display = "none";
  }
}
function agregarMotor() {
  if ((document.getElementById("motorElectrico").style.display = "none")) {
    document.getElementById("motorElectrico").style.display = "flex";
    document.getElementById("auto_cuerpo").style.display = "none";
    document.getElementById("auto_plug").style.display = "none";
    document.getElementById("auto_plug_bateria").style.display = "none";
    document.getElementById("auto_plug_bateria_motor").style.display = "flex";
    document.getElementById("texto_motor_nucleo1").style.visibility = "visible";
    document.getElementsByClassName("nucleo1__item")[2].style.backgroundColor = "#84C374";
  } else {
    document.getElementById("motorElectrico").style.display = "none";
  }
}
