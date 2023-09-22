// Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number).
// retorn true se a imagem estiver no modo paisagem.

const ePaisagem = (largura, altura) => (largura > altura ? true : false);

console.log(ePaisagem(1920, 1080));
//
function paisagem(largura, altura) {
  return largura > altura;
}

console.log(paisagem(1920, 1080));
// arrow function

const ePaisagem2 = (largura, altura) => largura > altura;
console.log(ePaisagem2(1920, 1080));
