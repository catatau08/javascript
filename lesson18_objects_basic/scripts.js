// *************************************** //
//              Objects (basic)            //
// *************************************** //
/* Modo mais longo de fazer
const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`)
        console.log(`A minha idade atual é ${this.idade}.`)
    },

    incrementaIdade() { // Incrementa +1 na idade quando chamado
        ++this.idade
    }
}

pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()

const pessoa2 = {
    nome: 'Maria',
    sobrenome: 'Oliveira',
    idade: 55
}

console.log(pessoa2.nome)
*/

function criaPessoa (nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
}

const pessoa1 = criaPessoa('Luiz', 'Otávio', 25)
const pessoa2 = criaPessoa('Maria', 'Oliveira', 55)

console.log(pessoa1.nome, pessoa1.sobrenome, pessoa2.nome)
