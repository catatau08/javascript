// *************************************** //
//                Switch/Case              //
// *************************************** //
/* A declaração switch avalia uma expressão, correspondendo o valor da expressão contra uma série de cláusulas case, e executa declarações após a primeira cláusula case com um valor correspondente, até que um comando break seja encontrado. */

/* O switch é útil quando você precisa fazer seleções múltiplas com base no valor de uma única expressão, e ele pode tornar seu código mais organizado e fácil de entender em situações específicas. */


const data = new Date()
const diaSemana = data.getDay()
let diaSemanaTexto

switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Sunday'
        break;
    case 1:
        diaSemanaTexto = 'Monday'
        break;
    case 2:
        diaSemanaTexto = 'Tuesday'
        break;
    case 3:
        diaSemanaTexto = 'Wednesday'
        break;
    case 4:
        diaSemanaTexto = 'Thursday'
        break;
    case 5:
        diaSemanaTexto = 'Friday'
        break;
    case 6:
        diaSemanaTexto = 'Saturday'
        break;
    default: /* esta cláusula é executada se o valor da expressão não corresponder a nenhuma das cláusulas case. */
        diaSemanaTexto = ''
        break
}

console.log(diaSemana, diaSemanaTexto)

/* A mesma função só que com if else 
//------------------------------------
if (diaSemana === 0) {
    diaSemanaTexto = 'Domingo'
} else if (diaSemana === 1) {
    diaSemanaTexto = 'Segunda-feira'
} else if (diaSemana === 2) {
    diaSemanaTexto = 'Terça-feira'
} else if (diaSemana === 3) {
    diaSemanaTexto = 'Quarta-feira'
} else if (diaSemana === 4) {
    diaSemanaTexto = 'Quinta-feira'
} else if (diaSemana === 5) {
    diaSemanaTexto = 'Sexta-feira'
} else if (diaSemana === 6) {
    diaSemanaTexto = 'Sábado'
} else {
    diaSemanaTexto = ''
}
//-------------------------------------
*/