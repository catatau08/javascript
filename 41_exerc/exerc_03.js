// Escreva uma função que recebo um número e retorne o seguinte:
// Número é divisivel por 3 = Fizz
// Número é divisivel por 5 = Buzz
// Número é divisivel por 3 e 5 = FizzBuzz
// Número NÃO é divisivel por 3 e 5 = retorna o próprio número
// Checar se o número é realmente um número = retorna o próprio número
// Use a função com números de 0 a 100

function divisao(numero) {
  numero = Number(numRandom());

  if (isNaN(numero) !== false) return numero;
  if (numero % 3 === 0 && numero % 5 === 0) return "FizzBuzz";
  if (numero % 3 === 0) return "Fizz";
  if (numero % 5 === 0) return "Buzz";
  return numero;
}

const numRandom = (chamaDiv) =>
  (chamaDiv = parseInt(Math.random() * (100 - 0) + 0));

console.log((result = divisao()));
