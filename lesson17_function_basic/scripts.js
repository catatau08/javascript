// *************************************** //
//             Function (basic)            //
// *************************************** //
/*
function saudacao(nome) {   
    return `Good morning ${nome}!`
}

const variavel = saudacao('Luiz')
console.log(variavel)


function soma (x,y) { // função de soma
    const resultado = x + y 
    return resultado
}

const resultado = soma(2,2)
console.log(resultado)

// ****************************************** 

function soma (x = 1, y = 1) { // x y vai assumir um valor quando não tiver
    const resultado = x + y 
    return resultado
}

const resultado = soma(4)
console.log(resultado)

// *******************************************

const raiz = function (n) { // outra maneira de criar function
    return n ** 0.5
};

console.log(raiz(9))
console.log(raiz(12))
console.log(raiz(9))

// ********************************************
*/
const raiz = n => n ** 0.5 // arrow function modo simplificado de fazer

console.log(raiz(9))