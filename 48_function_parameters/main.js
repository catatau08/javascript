// argumentos que sustenta todos os argumentos enviados

/* function funcao() {
    console.log(arguments[3])
}
funcao('Valor', 1, 2, 3, 4, 5, 6, 7, 'Luiz') */
/******************************************* */
/*
function funcao(a, b, c) {
    let total = 0
    for (let argumento of arguments) {
        total += argumento
    }

    console.log(total, a, b, c)
}

funcao(1, 2, 3, 4, 5, 6, 7) */
/******************************************* */
/*
function funcao (a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f)
}
funcao(1, 2, 3) */
/******************************************* */
/*
function funcao(a, b = 2, c = 4) {
    console.log(a + b + c)
}
funcao(2, undefined, 20) */
/******************************************* */
/*
function funcao([valor1, valor2, valo3]) {
    console.log(valor1, valor2, valo3)
}

funcao(['Luiz', 'Miranda', 30])
*/
/******************************************* */
const conta = function conta(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if (operador === '+') acumulador += numero
        if (operador === '-') acumulador -= numero
        if (operador === '/') acumulador /= numero
        if (operador === '*') acumulador *= numero
    }

    console.log(acumulador)
};
conta('+', 200, 20, 30, 40, 50)