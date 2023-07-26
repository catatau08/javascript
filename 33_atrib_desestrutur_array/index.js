// *************************************** //
//            Array Destructuring          //
// *************************************** //
/*
A desestruturação de array é uma forma conveniente de extrair elementos de um array e atribuí-los a variáveis individuais de uma só vez.
*/

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: { // objeto dentro de um objeto
        rua: 'Av Brasil', 
        numero: 320
    }
}
// Atribuição via desestruturação
const { nome, sobrenome} = pessoa
console.log(nome, sobrenome)

// nome: n = '' // substituindo nome no array
// nome = 'Não existe' // criando uma propriedade nome que não existe no array
// genero = 'masculino'
// const { endereco: { rua, numero } } = pessoa // pega o valor de 'rua' e 'numero'
// const { endereco: {rua: r = 12345} } // caso não exista cria um novo objeto
// const { nome, ...resto } = pessoa // pega nome e o restante do objeto