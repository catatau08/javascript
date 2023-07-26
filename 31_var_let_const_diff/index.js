// *************************************** //
//           VAR, LET/CONST - DIFF         //
// *************************************** //
/*
LET/CONST --------------------
// Você não pode chamar o valor de let/const fora do bloco declarado
const verdadeira = true

// let tem escopo de bloco { ... bloco}
// var só tem escopo de função

let nome = 'Luiz' // criando
var nome2 = 'Luiz' 

if (verdadeira) {
    let nome ='Otávio' // criando
//  console.log(nome, nome2)

    if (verdadeira) {
        let nome = 'Outra coisa' // primeiro procura aqui depois vai pra cima
        console.log(nome, nome2)
    }
}
*/
/*
// VAR ------------------------
const verdadeira = true

let nome = 'Luiz' // criando
var nome2 = 'Luiz' // criando

if (verdadeira) {
    let nome = 'Otávio' // criando
    var nome2 ='Otávio' // redeclarada

    if (verdadeira) {
        var nome2 = 'Otávio' // Redeclarada
        let nome = 'Outra coisa'

    }
}
console.log(nome, nome2)
*/