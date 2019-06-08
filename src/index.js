const paginaInicio = document.getElementById("paginaInicio")
const paginaCodificar1  = document.getElementById("paginaCodificar1")
const mensajeCodificado = document.getElementById("mensajeCodificado")
const mensajeEnviado = document.getElementById("mensajeEnviado")
const paginaDecodificar1  = document.getElementById("paginaDecodificar1")
const mensajeDecodificado = document.getElementById("mensajeDecodificado")
const vuelvePronto = document.getElementById("vuelvePronto")

const iniciar = document.getElementById("iniciar")
const buttonReturn = document.getElementById("buttonReturn")
const buttonClose = document.getElementById("buttonClose")
const buttonEnviar = document.getElementById ("buttonEnviar")

function cerrar() {
  paginaInicio.style.display = "none"
  paginaCodificar1.style.display = "none"
  mensajeCodificado.style.display = "none"
  mensajeEnviado.style.display = "none"
  paginaDecodificar1.style.display = "none"
  mensajeDecodificado.style.display = "none"
  vuelvePronto.style.display = "block"
}

function irCodificar(){
		paginaInicio.style.display = "none"
	  paginaCodificar1.style.display = "block"
    buttonReturn.style.display = "block"
  }


function codificar()  {
    paginaCodificar1.style.display = "none"
    mensajeCodificado.style.display = "block"
    buttonEnviar.style.display = "block"
  }


function enviar()  {
    mensajeCodificado.style.display = "none"
    mensajeEnviado.style.display = "block"
    iniciar.style.display = "block"
    buttonEnviar.style.display = "none"
  }


function irDecodificar()  {
    paginaInicio.style.display = "none"
    paginaDecodificar1.style.display = "block"
    buttonReturn.style.display = "block"
  }

function decodificar()  {
    paginaDecodificar1.style.display = "none"
    mensajeDecodificado.style.display = "block"
    iniciar.style.display = "block"
  }


function irInicio()  {
    mensajeEnviado.style.display = "none"
    mensajeDecodificado.style.display = "none"
    vuelvePronto.style.display = "none"
    iniciar.style.display = "none"
    paginaInicio.style.display = "block"

    location.reload();

      }
