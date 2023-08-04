// Escreva uma função que recebe 2 números e retorne o maior deles

function numeroMaior(min, max) {
    return max > min ? max : min; 
}

const max2 = (x, y) => {
    return x > y ? x : y;
}

const max3 = (x,y) => x > y ? x : y

console.log(numeroMaior(10, 2))
