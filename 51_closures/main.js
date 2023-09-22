function retornFuncao(nome) {
  return function () {
    return nome;
  };
}

const funcao = retornFuncao("Luiz");
const funcao2 = retornFuncao("Joao");
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());
