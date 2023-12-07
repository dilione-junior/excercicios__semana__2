    //1.a) Mostre os números de 1 a 50 na tela, dizendo se é par ou ímpar:
    
    function mostra (frase) {
            
        document.write(frase);
        document.write("<br>");
    }

    for(var inicio = 1; inicio <= 50; inicio++) {
        
        if (inicio % 2 == 0){
            mostra(inicio + " é par")
        }
        else {
            mostra(inicio + " é impar")
        }
    }
    mostra(inicio)