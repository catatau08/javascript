// Versão do instrutor

const elementos = [

    { tag: 'p', texto: 'Phrase 1' }, // 0
    { tag: 'div', texto: 'Phrase 2' }, // 1
    { tag: 'footer', texto: 'Phrase 3' },
    { tag: 'section', texto: 'Phrase 4' },

];

const container = document.querySelector('.container')
const div = document.createElement('div')

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i]
    let tagCriada = document.createElement(tag)
    //  let tagCriada = document.createElement(tag)
    tagCriada.innerHTML = texto // .innerText
    //  tagCriada.appendChild(textoCriado)
    div.appendChild(tagCriada)
}

container.appendChild(div)
