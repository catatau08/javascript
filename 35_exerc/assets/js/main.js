const elementos = [

        { tag: 'p', texto: 'Frase 1' }, // 0
        { tag: 'div', texto: 'Frase 2' }, // 1
        { tag: 'footer', texto: 'Frase 3' },
        { tag: 'section', texto: 'Frase 4' },
    
    ];

const result = document.querySelector('section')
result.innerHTML += `<${(elementos[1]['tag'])}>` // inserindo uma div no html
const divResult = document.querySelector('div') // selecionando a div para inserir dentro os elementos

for (i = 0 ; i <= 3 ; i++) { // loop para adicionar os elementos 
    divResult.innerHTML += `<${(elementos[i]['tag'])}>${(elementos[i]['texto'])}`
}