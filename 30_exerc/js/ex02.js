// Maneira mais facil de mostrar data e hora usando toLocateString()

const h2 = document.querySelector('#ex02');
const data2 = new Date();
h2.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short' });