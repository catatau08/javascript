// ******************************************* //
// Valores primitivos e valores por referência //
// ******************************************* //
//
/* Primitivos (imutáveis) - string, number, boolean, undefined,
null (bigint, symbol)
// São valores copiados
------------------------------------------------
let a = 'A'
let b = a // Cópia
console.log(a,b)

a = 'Outra coisa'
console.log(a,b) // b não é alterado
-------------------------------------------------
// ******************************************* */
// 
// Referência (mutável) - array, object, function 
// São valores passados por referência
//
let a = [1,2,3]
let b = [...a] // valor de a copiado pro valor de b
let c = b // c vai seguir o que b fizer (a é totalmente idependente de c)

console.log(a,b)

a.push(4)
console.log(a, b)

b.pop()
console.log(a, b)

a.push('Luiz')
console.log(c)