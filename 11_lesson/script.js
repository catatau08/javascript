//               01234567 <- Indice
let umaString = "Um texto"

console.log(umaString.concat(' em um lindo dia.'))
console.log(umaString + ' em um lindo dia.')
console.log(`${umaString} em um lindo dia.`)

console.log(umaString.indexOf('Um', 3)) 
// Em qual indice começa a palavra 'Um' (3 expecifica onde começar a procurar a palavra)
console.log(umaString.lastIndexOf('o', 3)) // de tras pra frente
console.log(umaString.match(/[a-z]/g)) // Expressão regular
/*usado para procurar um padrão específico em uma string e retorna um array com todas as ocorrências encontradas.*/
console.log(umaString.search(/x/))
// usado para procurar por um valor específico em uma string.
console.log(umaString.replace('Um', 'Outra')) // //rg, l
// usado para substituir partes de uma string por outra string.
console.log(umaString.length)
/* é utilizada para obter o tamanho ou comprimento de uma string, array ou objeto semelhante a um array.*/
console.log(umaString.slice(2, 5)) // -3, umaString.length - 1
// é uma função utilizada para extrair uma parte de uma string
console.log(umaString.split('r', 3))
/* é uma função utilizada para dividir uma string em um array de substrings com base em um separador especificado.*/
console.log(umaString.toUpperCase()) // Maiusculo
console.log(umaString.toLowerCase()) // Minusculo