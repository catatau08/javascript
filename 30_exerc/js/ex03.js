// A maneira que o instrutor fez usando array

const h3 = document.querySelector('#ex03')
const data3 = new Date()

function getDiaSemanaTexto(diaSemana) {
    const diasSemana = ['sunday', 'monday','tuesday','wednesday','thursday', 'friday', 'saturday']
    return diasSemana[diaSemana]
}

function getNomeMes(numeroMes) {
    const meses = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']
    return meses[numeroMes]
}

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}

function criaDate(data3) {
    const diaSemana = data3.getDay()
    const numeroMes = data3.getMonth()

    const nomeDia = getDiaSemanaTexto(diaSemana)
    const nomeMes = getNomeMes(numeroMes)

    return (
        `${nomeDia},  ${nomeMes} ${data3.getDate()}nd,` +
        ` ${data3.getFullYear()} ` +
        `${zeroAEsquerda(data3.getHours())}:${zeroAEsquerda(data3.getMinutes())}`
    )
}

h3.innerHTML = criaDate(data3)