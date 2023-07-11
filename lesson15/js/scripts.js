const numero = Number(prompt('Digite um número: '))
const numeroPrinc = document.getElementById ('numero-princ') // var do numero princ
const numraiz = document.getElementById('r-quadrada') // var da raiz quadrada

numeroPrinc.innerHTML = numero // modificando o numero princ no html
numraiz.innerHTML = numero ** (1/2) // fazendo a raiz quadrada e modificando o html
