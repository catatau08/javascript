// *************************************** //
//           Object Destructuring          //
// *************************************** //
/*
 A desestruturação de objeto é uma funcionalidade que permite extrair valores de propriedades de um objeto e atribuí-los a variáveis individuais de uma forma mais conveniente.

// Exercicio anterior
let a = 'A' // B
let b = 'B' // C
let c = 'C' // A

// Atribuição via desestruturação no exercicio anterior
const letras = [b, c, a];
[a, b, c] = letras

console.log(a, b, c)
*/

/*
//                0   1   2   3   4   5   6   7   8     // Indice
const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];   // Valor
const [primeiroNumero, segundoNumero, ...resto] = numeros
// const resto esta pegando o resto da indice na array
// primeiroNumero, segundoNumero esta pegando os dois primeiros valores da indice
console.log(primeiroNumero, segundoNumero)
console.log(resto)
*/

/*
// Pulando indice

//                0   1   2   3   4   5   6   7   8     // Indice
const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];   // Valor
const [um, , tres, , cinco, , sete] = numeros // , , pula um indice

console.log(um, tres, cinco)
*/

/*
//                    0          1          2       // indice da lista
//                 0  1  2    0  1  2    0  1  2    // indice do valor
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]

console.log(numeros[1][2]) // pegando valor 6 da lista 1
*/

// Outra forma de fazer um pouco diferente

const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]
const [,[,,seis]] = numeros
//    [,] para pular o primeiro indice da lista
//      [,,seis] no segundo indice da lista pula duas casas pega o valor do i 6
console.log(seis)