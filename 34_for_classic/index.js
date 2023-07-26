// *************************************** //
//           For - Classic - Loop          //
// *************************************** //
// for ( ) {    // estrutura de repetição for classica
//              // criar uma variavel, criar uma condição, incrementa ou 
//              decrementa variavel de controle.
// }

// i - index || repetição de 0 a 5
for (let i = 0; i <= 5; i++) { 
    console.log(`Linha ${i}`)
}
// let i = 0 variavel de controle || i <= 5 condição para parar a repetição
// i++ a cada volta do laço o i vai ser incrementado +1

// de 500 até 400 de 10 em 10
for (let i = 500; i >= 400; i -= 10) {
    console.log(`Linha ${i}`)
}

// Par ou Impar com for | se i % 2 === 0 for true retorna 'par' senão 'impar'
for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par' : 'impar'
    console.log(i, par)
}

// Percorrer um array com for de 0 até o tamanho da array 
const frutas = ['Maça', 'Pêra', 'Uva'];

for (let i = 0; i < frutas.length; i++) {
    console.log (`Indice ${i}`, frutas[i])
}

