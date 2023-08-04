const nome = 'Luiz Otávio'

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i])
}
// lendo cada letra de nome com for
// geralmente iteráveis (array ou strings)

for (let i in nome) {
    console.log(nome[i])
}
// lendo cada letra de nome com for in
// retorna o indice ou chave (string, array ou objeto)

for (let i of nome) {
    console.log(i)
}
// lendo cada letra de nome com for of
// retorna o valor em si || (itaráveis, array e stringsnão funciona com objeto


// (funciona com array)
// nome.forEach(function(valor, indice) {
//     console.log(valor, indice)
// })