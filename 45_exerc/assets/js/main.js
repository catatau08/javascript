const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')

let segundos = 0
let minutos = 0
let horas = 0

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}

function iniContagem() {
    timer = setInterval(function () {
        if (segundos < 59) {
            segundos++
        } else if (minutos < 59) {
            minutos++
            segundos = 0
        } else if (horas < 24) {
            horas++
            minutos = 0
        }
        relogio.innerHTML = `${zeroAEsquerda(horas)}:${zeroAEsquerda(minutos)}:${zeroAEsquerda(segundos)}`

    }, 1000)
}

iniciar.addEventListener('click', function (e) {
    iniContagem()
})

pausar.addEventListener('click', function (event) {
    setTimeout(function () {
        clearInterval(timer)
    },)
})

zerar.addEventListener('click', function (e) {
    setTimeout(function () {
        segundos = 0
        minutos = 0
        horas = 0
        relogio.innerHTML = `${zeroAEsquerda(horas)}:${zeroAEsquerda(minutos)}:${zeroAEsquerda(segundos)}` 
    })
    clearInterval(timer)
})