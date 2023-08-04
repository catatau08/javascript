const frutas = ['Pera', 'Maça', 'Uva'];

// fazendo com for 
// for (let i = 0; i < frutas.length; i++) {
//    console.log(frutas[i])
// }
//
// fazendo com for in // lê os indices ou chaves do objeto

// for (let i in frutas) {
//    console.log(frutas[i])
// }
// ------------------------------
const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Otávio',
  idade: 30  
};

for (let chaves in pessoa) {
    console.log(chaves, pessoa[chaves]) // console.log(chaves) 
}

// const chaves = 'nome'
// console.log(chaves)

// console.log(pessoa.nome)
// console.log(pessoa['nome'])