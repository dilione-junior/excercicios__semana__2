 //b) Mostre apenas os múltiplos de 3 entre 1 e 100:    
function mostra(frase){
    document.write(frase)
    document.write("<br>")
}

for (var inicio = 1; inicio <= 100; inicio++){
    if (inicio % 3 == 0) {
        mostra(inicio)
    } 
}