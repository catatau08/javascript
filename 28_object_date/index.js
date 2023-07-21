// *************************************** //
//                Object Date              //
// *************************************** //

/*
const quatroHoras = 60 * 60 * 4 * 1000
const umDia = 60 * 60 * 24 * 1000
const data = new Date(0 + quatroHoras + umDia); // 01/01/1970 Timestamp unix
console.log(data.toString())
*/

// const data = new Date(2023, 6, 20, 20, 21, 59) // 2023/Julho/20 - 20:21:59
// console.log(data.toString())

/*
const data = new Date('2023-07-20 20:26:59') // Forma mais usada pra formatar data

console.log('Dia', data.getDate())
console.log('Mês', data.getMonth()) // Mês começa do zero
console.log('Ano', data.getFullYear())
console.log('Hora', data.getHours())
console.log('Min', data.getMinutes())
console.log('Seg', data.getSeconds())
console.log('ms', data.getMilliseconds())
console.log('Dia semana', data.getDay()) // 0 - Domingo, 6 - Sabado
console.log(Date.now())
console.log(data.toString())
*/
//--------------------------------------
    function zeroAEsquerda (num) {
        return num >= 10 ? num : `0${num}`
    }

    function formataData(data) {
        const dia = zeroAEsquerda(data.getDate())
        const mes = zeroAEsquerda(data.getMonth() + 1)
        const ano = zeroAEsquerda(data.getFullYear())
        const hora = zeroAEsquerda(data.getHours())
        const min = zeroAEsquerda(data.getMinutes())
        const seg = zeroAEsquerda(data.getSeconds())

        return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

    const data = new Date() 
    const dataBrasil = formataData(data)
    console.log(dataBrasil)