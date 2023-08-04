// *************************************** //
//             Break e Continue            //
// *************************************** //
// break
// sair imediatamente de um loop (for, while ou do-while) quando uma determinada condição é atendida.
//
// continue
// pular a iteração atual de um loop e prosseguir para a próxima iteração.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {

    if (numero === 2) {
        console.log('Pulei o número 2')
        continue
    }

    if (numero === 7) {
        console.log('7 encontrado, saindo...')
        break
    }
    
    console.log(numero)
}