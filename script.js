const btnEnviar = document.querySelector("#btn-enviar")
const btnMostrar = document.querySelector("#btn-mostrar")
const btnCalcular = document.querySelector("#btn-calcular")


function calcular() {
    alert("Calculando...")
}

function mostrar() {
    alert("Mostrando...")
}

function enviar() {
    alert("Enviando...")
}

btnCalcular.addEventListener("click", calcular)
btnMostrar.addEventListener("click", mostrar)
btnEnviar.addEventListener("click", enviar)