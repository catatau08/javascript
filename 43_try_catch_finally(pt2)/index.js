try {
    // se a condição
    console.log('Abri um arquivo')
    console.log * 'Manipulei o arquivo e gerou erro'
    console.log('Fechei o arquivo')

    try {
        console.log(b)
    } catch (e) {
        console.log('Deu erro')
    } finally {
        console.log('também sou finally')
    }

} catch (e) {
    // é executada quando há erros
    console.log('Tratando o erro')
} finally {
    // Sempre
    console.log('Eu sempre sou executado')
}

//// part 2

function retornaHora(data) {
    if (date && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.')
    }

    if (data) {
        data = new Date()
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })
}

try {
    const data = new Date('01-01-1970 12:58:12')
const hora = retornaHora()
console.log(hora)
} catch(e) {
    // Tratar erro
} finally {
    console.log('Tenha um bom dia')
}


