//Crie um programa que recebe 10 letras e ao final exibe todas elas

var letras = [] 

function recebeLetras(){
    var letraDigitada = prompt("Digite uma letra :")
    letras.push(letraDigitada)
}
for (var i = 0; i < 10; i = i++){
    recebeLetras()
}

document.write(letras)
document.write(letras[0])