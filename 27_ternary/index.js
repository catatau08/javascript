// *************************************** //
//             Operação Ternária           //
// *************************************** //
/*O operador condicional (ternário) é o único operador em JavaScript que recebe três operandos: uma condição seguida de um ponto de interrogação (?), então uma expressão para ser executada se a condição for verdadeira, seguida por dois pontos (:), e finalmente a expressão a ser executada se a condição for falsa. Este operador é frequentemente utilizado como uma alternativa para uma declaração if...else. */


const pontuacaoUsuario = 999 
// (condicao) ? 'valor para verdadeiro' : 'Valor para falso'
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuario Normal';

const corUsuario = null; // 'Pink'
// verifica o valor de corUsuario se for 'null' o valor mudara para 'Preto'
const corPadra = corUsuario || 'Preto'

console.log(nivelUsuario, corPadra)

/* Operação if else normal ////
if (pontuacaoUsuario >= 1000) {
    console.log('Usuário VIP')
} else {
    console.log('Usuario Normal')
}
*/