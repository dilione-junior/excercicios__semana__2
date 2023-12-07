//A diretoria de uma escola quer que o sistema de notas dos alunos tenha uma nova funcionalidade
var nomeEstudante = prompt("Nome : ")
var disciplina = prompt("Disciplina : ")
var notaProva = parseInt(prompt("Prova : "))
var notaTrabalho = parseFloat(prompt("Trabalho : "))

function verificarEstudanteAbaixoDaMedia(nomeEstudante, disciplina, notaProva, notaTrabalho){
    var media = (notaProva + notaTrabalho) / 2
    if (media >= 7){
        alert(nomeEstudante + " está com nota acima da média em " + disciplina + " , sua média foi : " + media)
    } else {
        alert(nomeEstudante + " está com nota abaixo da média em " + disciplina + " , sua média foi : " + media)
    }
}

verificarEstudanteAbaixoDaMedia(nomeEstudante,disciplina,notaProva,notaTrabalho)