function getTimeFromSecond(segundos) {
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
let segundos = 0
let timer;

function startRelogio() {
    timer = setInterval(function () {
        segundos++
        relogio.innerHTML = getTimeFromSecond(segundos)
    }, 1000)
}

iniciar.addEventListener('click', function (e) {
    relogio.classList.remove('pausado')
    clearInterval(timer)
    startRelogio()
})

pausar.addEventListener('click', function (event) {
    relogio.classList.add('pausado')
    clearInterval(timer)
})

zerar.addEventListener('click', function (e) {
    clearInterval(timer)
    relogio.innerHTML = '00:00:00'
    segundos = 0
})