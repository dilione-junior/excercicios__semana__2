//Um software utilizado em escolas, agora possibilitará que o líder de uma turma seja escolhido    
function mostra(frase){
    document.write(frase)
    document.write("<br>")
}
function escolheAlunoDaTurma(aluno1, mediaPort1 , mediaMat1, aluno2 , mediaPort2 , mediaMat2){
    if(mediaPort1 > mediaPort2){
        mostra("O lider de turma é " + aluno1)
    } else if(mediaPort2 > mediaPort1){
        mostra("O lider de turma é " + aluno2)
    } else if(mediaPort1 == mediaPort2) {
        if(mediaMat1 > mediaMat2){
            mostra("O lider de turma é " + aluno1)
        } else{
            mostra("O lider de turma é " + aluno2)
        }
    }  
}
    escolheAlunoDaTurma("Dilione", 9 , 10 , "Maria" , 7 , 10);