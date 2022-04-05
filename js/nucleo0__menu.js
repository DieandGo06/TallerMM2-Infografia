/* NUCLEO 0 */
let botonIntroduccion = document.getElementById("nucleo0__boton");
botonIntroduccion.onclick = function (e) {
  let _elemento = document.getElementById("nucleo0__auto");
  _elemento.classList.add("nucleo0__auto-animado");
};

/* MENU */
function OcultarMenu(numNucleo) {
  let menu = document.getElementById("menu");
  let elementosAbiertos = document.getElementsByClassName("open");

  for (let i = 0; i < elementosAbiertos.length; i++) {
    elementosAbiertos[i].classList.remove("open");
  }
  menu.classList.remove("open");

  nucleoActual = numNucleo;
  carrete.style.left = nucleoPositionX[numNucleo] + "px";
  carretePosition = nucleoPositionX[numNucleo];
  carrete.style.transitionDuration = "0s";
}

("use strict");

(function () {
  var body = document.body;
  var burgerMenu = document.getElementsByClassName("b-menu")[0];
  var burgerContain = document.getElementsByClassName("b-container")[0];
  var burgerNav = document.getElementsByClassName("b-nav")[0];

  burgerMenu.addEventListener(
    "click",
    function toggleClasses() {
      [body, burgerContain, burgerNav].forEach(function (el) {
        el.classList.toggle("open");
      });
    },
    false
  );
})();
