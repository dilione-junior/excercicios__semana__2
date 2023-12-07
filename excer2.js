//O jogo do PIM é um jogo em que o Sílvio Santos pedia para os participantes de seu programa contar de 1 até 40
function mostra(frase){
    document.write(frase)
    document.write("<br>")
}
for(var inicio = 1; inicio<=40; inicio++){
    if(inicio % 4 == 0){
        mostra("PIM")
    } else {
        mostra(inicio)
    }
}