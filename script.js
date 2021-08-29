 function somar() {
    let numero1 = window.document.getElementById("Num1").value
    let numero2 = window.document.getElementById("Num2").value
    let resultado;
    resultado = parseFloat(numero1) + parseFloat(numero2)
    document.getElementById("resultado").innerHTML = resultado;
}

function sub() {
    let numero1 = window.document.getElementById("Num1").value
    let numero2 = window.document.getElementById("Num2").value
    let resultado;
    resultado = numero1 - numero2
    document.getElementById("resultado").innerHTML = resultado;
}

function multi() {
    let numero1 = window.document.getElementById("Num1").value
    let numero2 = window.document.getElementById("Num2").value
    let resultado;
    resultado = numero1 * numero2
    document.getElementById("resultado").innerHTML = resultado;
}

function div() {
    let numero1 = window.document.getElementById("Num1").value
    let numero2 = window.document.getElementById("Num2").value
    let resultado;
    resultado = numero1 / numero2
    document.getElementById("resultado").innerHTML = resultado;
}