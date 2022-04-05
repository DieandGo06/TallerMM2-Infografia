function modosDeCarga() {
  if ((document.getElementById("infoModosDeCarga").style.display = "flex")) {
    document.getElementById("item_nucleo1").style.display = "none";
    document.getElementById("item_nucleo2").style.display = "none";
    document.getElementById("item_nucleo3").style.display = "none";
    document.getElementById("infoModosDeCarga").style.display = "none";
    document.getElementsByClassName("nucleo1_grafico")[0].style.display = "none";
    document.getElementsByClassName("item2")[0].style.display = "none";
    document.getElementById("titulo_componentes_electricos").style.display = "none";
    document.getElementById("subtitulo_componentes_electricos").style.display = "none";
    document.getElementById("CargaLenta_nucleo1").style.display = "flex";
    document.getElementById("CargaSemiRapida_nucleo1").style.display = "flex";
    document.getElementById("CargaRapida_nucleo1").style.display = "flex";
    document.getElementById("CargaLenta_secuencia").style.display = "flex";    
    document.getElementById("titulo_mododecarga").style.display = "flex";
    document.getElementById("subtitulo_mododecarga").style.display = "flex";
    document.getElementsByClassName("nucleo1_items")[0].style.padding = "0% 5%";
    document.getElementsByClassName("item_Carga1")[0].style.backgroundColor = "#84c374";
    document.getElementById("txt_torre").style.visibility = "visible";
    document.getElementById("torreCargaLenta-Noseleccionada").style.display = "none";
    document.getElementById("torreCargaLenta-seleccionada").style.display = "flex";
    document.getElementById("progresoCargaLenta").style.display = "flex";
    document.getElementById("progresoCargaLenta").style.width = `15%`;
    document.getElementsByClassName("VolverComponentes-container")[0].style.display = "flex";
   
  }
}

function componentesCircuito(){
  if ((document.getElementsByClassName("VolverComponentes-container")[0].style.display = "flex")) {
    document.getElementById("CargaLenta_secuencia").style.display = "none";
    document.getElementById("CargaSemiRapida_secuencia").style.display = "none";
    document.getElementById("CargaRapida_secuencia").style.display = "none";
    document.getElementById("CargaLenta_nucleo1").style.display = "none";
    document.getElementById("CargaSemiRapida_nucleo1").style.display = "none";
    document.getElementById("CargaRapida_nucleo1").style.display = "none";
    document.getElementById("titulo_mododecarga").style.display = "none";
    document.getElementById("subtitulo_mododecarga").style.display = "none";
    document.getElementsByClassName("VolverComponentes-container")[0].style.display = "none";
    document.getElementById("item_nucleo1").style.display = "initial";
    document.getElementById("item_nucleo2").style.display = "initial";
    document.getElementById("item_nucleo3").style.display = "initial";
    document.getElementById("titulo_componentes_electricos").style.display = "flex";
    document.getElementById("subtitulo_componentes_electricos").style.display = "flex";
    document.getElementsByClassName("nucleo1_grafico")[0].style.display = "flex";
    document.getElementById("infoModosDeCarga").style.display = "flex";
       
  }


}

/* CARGA LENTA*/
function CargaLenta() {
  if ((document.getElementById("CargaLenta_nucleo1").style.display = "flex")) {
    document.getElementById("CargaLenta_secuencia").style.display = "flex";
    document.getElementById("CargaSemiRapida_secuencia").style.display = "none";
    document.getElementById("CargaRapida_secuencia").style.display = "none";
    document.getElementsByClassName("item_Carga1")[0].style.backgroundColor = "#84c374";
    document.getElementsByClassName("item_Carga2")[0].style.backgroundColor = "#e6fbe1";
    document.getElementsByClassName("item_Carga3")[0].style.backgroundColor = "#e6fbe1";
  }
}

function torreCargaLenta() {
  if ((document.getElementById("itemX_Torre").style.display = "flex")) {
    document.getElementById("txt_titulo_torre").style.display = "flex";
  }
}

function casaCargaLenta() {
  if ((document.getElementById("itemX_Casa").style.display = "flex")) {
    document.getElementById("txt_casaCargaLenta").style.visibility = "visible";
    document.getElementById("txt_titulo_casa").style.display = "flex";
    document.getElementById("casaCargaLenta-Noseleccionada").style.display = "none";
    document.getElementById("casaCargaLenta-seleccionada").style.display = "flex";
    document.getElementById("progresoCargaLenta").style.width = `35%`;
  }
}

function conectorCargaLenta() {
  if ((document.getElementById("itemX_Conector").style.display = "flex")) {
    document.getElementById("txt_conectorCargaLenta").style.visibility = "visible";
    document.getElementById("txt_titulo_conector").style.display = "flex";
    document.getElementById("conectorCargaLenta-Noseleccionada").style.display = "none";
    document.getElementById("conectorCargaLenta-seleccionada").style.display = "flex";
    document.getElementById("progresoCargaLenta").style.width = `60%`;
  }
}

function autoCargaLenta() {
  if ((document.getElementById("itemX_CulataAuto").style.display = "flex")) {
    document.getElementById("txt_autoCargaLenta").style.visibility = "visible";
    document.getElementById("txt_titulo_auto").style.display = "flex";
    document.getElementById("autoCargaLenta-Noseleccionada").style.display = "none";
    document.getElementById("autoCargaLenta-seleccionada").style.display = "flex";
    document.getElementById("progresoCargaLenta").style.width = `75%`;
  }
}

/* CARGA SEMIRAPIDA*/

function CargaSemiRapida() {
  if ((document.getElementById("CargaSemiRapida_nucleo1").style.display = "flex")) {
    document.getElementById("CargaLenta_secuencia").style.display = "none";
    document.getElementById("CargaRapida_secuencia").style.display = "none";
    document.getElementById("CargaSemiRapida_secuencia").style.display = "flex";
    document.getElementById("txt_torre_cargasemirapida").style.visibility = "visible";
    document.getElementById("torreCargaSemiRapida-Noseleccionada").style.display = "none";
    document.getElementById("torreCargaSemiRapida-seleccionada").style.display = "flex";
    document.getElementById("progresoCargaSemiRapida").style.display = "flex";
    document.getElementById("progresoCargaSemiRapida").style.width = `15%`;
    document.getElementsByClassName("item_Carga1")[0].style.backgroundColor = "#e6fbe1";
    document.getElementsByClassName("item_Carga2")[0].style.backgroundColor = "#84c374";
    document.getElementsByClassName("item_Carga3")[0].style.backgroundColor = "#e6fbe1";
  }
}
function torreCargaSemiRapida() {
  if ((document.getElementById("itemX_Torre").style.display = "flex")) {
    document.getElementById("txt_titulo_torre_cargasemirapida").style.display = "flex";
  }
}
function casaCargaSemiRapida() {
  if ((document.getElementById("itemX_Casa").style.display = "flex")) {
    document.getElementById("txt_titulo_casa_cargasemirapida").style.display = "flex";
    document.getElementById("txt_casa_cargasemirapida").style.visibility = "visible";
    document.getElementById("casaCargaSemiRapida-Noseleccionada").style.display = "none";
    document.getElementById("casaCargaSemiRapida-seleccionada").style.display = "flex";
    document.getElementById("progresoCargaSemiRapida").style.width = `35%`;
  }
}
function conectorCargaSemiRapida() {
  if ((document.getElementById("itemX_Conector").style.display = "flex")) {
    document.getElementById("txt_titulo_conector_cargasemirapida").style.display = "flex";
    document.getElementById("txt_conector_cargasemirapida").style.visibility = "visible";
    document.getElementById("conectorCargaSemiRapida-Noseleccionada").style.display = "none";
    document.getElementById("conectorCargaSemiRapida-seleccionada").style.display = "flex";
    document.getElementById("progresoCargaSemiRapida").style.width = `60%`;
  }
}
function autoCargaSemiRapida() {
  if ((document.getElementById("itemX_Auto").style.display = "flex")) {
    document.getElementById("txt_titulo_auto_cargasemirapida").style.display = "flex";
    document.getElementById("txt_auto_cargasemirapida").style.visibility = "visible";
    document.getElementById("autoCargaSemiRapida-Noseleccionada").style.display = "none";
    document.getElementById("autoCargaSemiRapida-seleccionada").style.display = "flex";
    document.getElementById("progresoCargaSemiRapida").style.width = `75%`;
  }
}

/* CARGA RAPIDA*/
function CargaRapida() {
  if ((document.getElementById("CargaRapida_nucleo1").style.display = "flex")) {
    document.getElementById("CargaLenta_secuencia").style.display = "none";
    document.getElementById("CargaSemiRapida_secuencia").style.display = "none";
    document.getElementById("CargaRapida_secuencia").style.display = "flex";
    document.getElementById("txt_torre_cargarapida").style.visibility = "visible";
    document.getElementById("torreCargaRapida-Noseleccionada").style.display = "none";
    document.getElementById("torreCargaRapida-seleccionada").style.display = "flex";
    document.getElementById("progresoCargaRapida").style.display = "flex";
    document.getElementById("progresoCargaRapida").style.width = `15%`;
    document.getElementsByClassName("item_Carga1")[0].style.backgroundColor = "#e6fbe1";
    document.getElementsByClassName("item_Carga2")[0].style.backgroundColor = "#e6fbe1";
    document.getElementsByClassName("item_Carga3")[0].style.backgroundColor = "#84c374";
  }
}
function torreCargaRapida() {
  if ((document.getElementById("itemX_Torre").style.display = "flex")) {
    document.getElementById("txt_titulo_torre_cargarapida").style.display = "flex";
  }
}
function casaCargaRapida() {
  if ((document.getElementById("itemX_Casa").style.display = "flex")) {
    document.getElementById("txt_casa_cargarapida").style.visibility = "visible";
    document.getElementById("txt_titulo_casa_cargarapida").style.display = "flex";
    document.getElementById("casaCargaRapida-Noseleccionada").style.display = "none";
    document.getElementById("casaCargaRapida-seleccionada").style.display = "flex";
    document.getElementById("progresoCargaRapida").style.width = `35%`;
  }
}
function conectorCargaRapida() {
  if ((document.getElementById("itemX_Conector").style.display = "flex")) {
    document.getElementById("txt_conector_cargarapida").style.visibility = "visible";
    document.getElementById("txt_titulo_conector_cargarapida").style.display = "flex";
    document.getElementById("conectorCargaRapida-Noseleccionada").style.display = "none";
    document.getElementById("conectorCargaRapida-seleccionada").style.display = "flex";
    document.getElementById("progresoCargaRapida").style.width = `60%`;
  }
}
function autoCargaRapida() {
  if ((document.getElementById("itemX_Auto").style.display = "flex")) {
    document.getElementById("txt_auto_cargarapida").style.visibility = "visible";
    document.getElementById("txt_titulo_auto_cargarapida").style.display = "flex";
    document.getElementById("autoCargaRapida-Noseleccionada").style.display = "none";
    document.getElementById("autoCargaRapida-seleccionada").style.display = "flex";
    document.getElementById("progresoCargaRapida").style.width = `75%`;
  }
}
