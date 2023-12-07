var tutor = prompt("Tutor(a):")
var telefone = prompt("Telefone para contato:")
var pet = []

//Crie um sistema para cadastrar animaizinhos num app de pets
function cadastraPet(){
    var nomePet = prompt("Qual o nome do pet:")
    var especie = prompt("Qual a espécie do pet:")
    var cor = prompt("Qual a cor do pet:")
    var outroPet = prompt("Você deseja cadastrar outro pet ? s/n")

    pet.push(nomePet, especie, cor)

    if(outroPet == "s"){
        cadastraPet()
    } else {
        alert("Obrigado por usar o nosso sistema !")
    }
}
    cadastraPet();