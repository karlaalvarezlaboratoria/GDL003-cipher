const paginaInicio = document.getElementById("paginaInicio");
const paginaCodificar  = document.getElementById("paginaCodificar");
const mensajeCodificado = document.getElementById("mensajeCodificado");
const mensajeEnviado = document.getElementById("mensajeEnviado");
const paginaDecodificar  = document.getElementById("paginaDecodificar");
const mensajeDecodificado = document.getElementById("mensajeDecodificado");
const vuelvePronto = document.getElementById("vuelvePronto");
const buttonReturn = document.getElementById("buttonReturn");
//const buttonClose = document.getElementById("buttonClose");

//function cerrar()
/*
const cerrar= () => {
  paginaInicio.style.display = "none"
  paginaCodificar1.style.display = "none"
  mensajeCodificado.style.display = "none"
  mensajeEnviado.style.display = "none"
  paginaDecodificar1.style.display = "none"
  mensajeDecodificado.style.display = "none"
  vuelvePronto.style.display = "block"
}
*/

const irCodificar = () => {
  paginaInicio.style.display = "none";
  paginaCodificar.style.display = "block";
  buttonReturn.style.display = "block";
  };

const codificar = () => {
  paginaCodificar.style.display = "none";
  mensajeCodificado.style.display = "block";
  buttonEnviar.style.display = "block";
  document.getElementById("mensajeCodificado").innerHTML = "Tu mensaje codificado es: <pr>"
  + window.cipher.encode();
  };

const enviar = () => {
  mensajeCodificado.style.display = "none";
  mensajeEnviado.style.display = "block";
  iniciar.style.display = "block";
  buttonEnviar.style.display = "none";
  };

const irDecodificar = () => {
  paginaInicio.style.display = "none";
  paginaDecodificar.style.display = "block";
  buttonReturn.style.display = "block";
  };

const decodificar = () => {
  paginaDecodificar.style.display = "none";
  mensajeDecodificado.style.display = "block";
  iniciar.style.display = "block";
  document.getElementById("mensajeDecodificado").innerHTML = "Tu mensaje decodificado es: <pr>"
  + window.cipher.decode();
  };

const irInicio = () => {
  mensajeEnviado.style.display = "none";
  mensajeDecodificado.style.display = "none";
  vuelvePronto.style.display = "none";
  iniciar.style.display = "none";
  paginaInicio.style.display = "block";

  document.getElementById("offsetCode").value= "";
  document.getElementById("offsetDecode").value= "";
  document.getElementById("message").value= "";
  document.getElementById("messageCifrado").value= "";
  };

let botonCodificar = document.getElementById("botonCodificar");
botonCodificar.addEventListener("click", irCodificar);

let botonCodificar2 = document.getElementById("botonCodificar2");
botonCodificar2.addEventListener("click", codificar);

let buttonEnviar = document.getElementById("buttonEnviar");
buttonEnviar.addEventListener("click", enviar);

let botonDecodificar = document.getElementById("botonDecodificar");
botonDecodificar.addEventListener("click", irDecodificar);

let botonDecodificar2 = document.getElementById("botonDecodificar2");
botonDecodificar2.addEventListener("click", decodificar);

let iniciar = document.getElementById("iniciar");
iniciar.addEventListener("click", irInicio);
