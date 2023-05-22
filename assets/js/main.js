// Registra la hora de entrada en la página
var horaEntrada = new Date();

// Cuando la persona sale de la página, registra la hora de salida
window.addEventListener('beforeunload', function () {
  var horaSalida = new Date();

  // Calcula la diferencia de tiempo en segundos
  var tiempoTotal = (horaSalida - horaEntrada) / 1000;

  // Muestra el tiempo total en la consola del navegador
  console.log('La persona estuvo en la página durante ' + tiempoTotal + ' segundos.');
});
  //MODO DIA MODO NOCHE

const switchBtn = document.getElementById("switch");
const colorFondoElems = document.querySelectorAll(".cambio1");
const oscuroElems = document.querySelectorAll(".cambio2");
const whiteElems = document.querySelectorAll(".cambio3");

switchBtn.addEventListener("click", function () {
  colorFondoElems.forEach(element => {
    if (element.classList.contains("colorFondo")) {
      element.classList.replace("colorFondo", "colorFondo-claro");
    } else if (element.classList.contains("colorFondo-claro")) {
      element.classList.replace("colorFondo-claro", "colorFondo");
    }
  });

  oscuroElems.forEach(element => {
    if (element.classList.contains("oscuro")) {
      element.classList.replace("oscuro", "claro");
    } else if (element.classList.contains("claro")) {
      element.classList.replace("claro", "oscuro");
    }
  });

  whiteElems.forEach(element => {
    if (element.classList.contains("white")) {
      element.classList.replace("white", "black");
    } else if (element.classList.contains("black")) {
      element.classList.replace("black", "white");
    }
  });

  switchBtn.classList.toggle("white");
  switchBtn.classList.toggle("black");

  // Guardamos el modo en local storage
  localStorage.setItem('modoDia', document.body.classList.contains('claro').toString());
});
//LOCAL STORAGE MODO DÍA MODO NOCHE
const modoDia = localStorage.getItem('modoDia') == 'true';

const replaceClass = (elements, fromClass, toClass) => {
  elements.forEach(element => element.classList.replace(fromClass, toClass));
};

if (modoDia) {
  replaceClass(colorFondoElems, "colorFondo", "colorFondo-claro");
  replaceClass(oscuroElems, "oscuro", "claro");
  replaceClass(whiteElems, "white", "black");
  switchBtn.classList.replace("white", "black");
} else {
  replaceClass(colorFondoElems, "colorFondo-claro", "colorFondo");
  replaceClass(oscuroElems, "claro", "oscuro");
  replaceClass(whiteElems, "black", "white");
  switchBtn.classList.replace;
}
//FORMULARIO
const handleInputChange = (inputElement) => {
  inputElement.classList.toggle("has-value", inputElement.value);
};

const input = document.querySelector("#input");
input.addEventListener("input", (event) => handleInputChange(input));

const input2 = document.querySelector("#input2");
input2.addEventListener("input", (event) => handleInputChange(input2));

const input3 = document.querySelector("#input3");
input3.addEventListener("input", (event) => handleInputChange(input3));

//REGEX

const emailInput = document.getElementById('input2'); // Obtener el campo de entrada de correo electrónico
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Crear la expresión regular
const submitButton = document.getElementById('btn2'); // Obtener el botón de envío

emailInput.addEventListener('blur', () => {
  if (emailInput.value!="") {
    if (emailRegex.test(emailInput.value)) {
      document.getElementById("errEmail").innerHTML="";

    submitButton.disabled = false; // Habilitar el botón de envío si el correo electrónico es válido
  } else {document.getElementById("errEmail").innerHTML="email no correcto"}} 
  else{
    document.getElementById("errEmail").innerHTML="Debes introducir  un email";
    submitButton.disabled = true; // Deshabilitar el botón de envío si el correo electrónico no es válido
  }
})

//REGEX NOMBRE
const nombreInput = document.getElementById('input');
const nombreRegex = /^\p{L}{2,}$/ui;

nombreInput.addEventListener('blur', () =>{
  if (nombreInput.value!="") {
    if(nombreRegex.test(nombreInput.value)){
      document.getElementById('errNombre').innerHTML="";
      submitButton.disabled = false;
    }else {document.getElementById('errNombre').innerHTML="Ingrese un Nombre"}
  }else{
    document.getElementById('errNombre').innerHTML="Nombre incorrecto";
    submitButton.disabled = false;
  }
})

//EASTER EGG
const borrarHtml = document.getElementById('borrar-html')
borrarHtml.addEventListener('click', function(){
  document.body.innerHTML="<div class=huevo></div>";
});