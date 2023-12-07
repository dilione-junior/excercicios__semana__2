//Mostre a seguinte sequência (de 100 até 0, pulando de dois em dois):    
function mostra(frase){
    document.write(frase)
    document.write("<br>")
}
for(var inicio = 100; inicio>=0; inicio=-2){
    mostra(inicio)
}