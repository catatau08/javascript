function meuArray () {
  const form = document.querySelector('#formulario')
  const resultado = document.querySelector('#resultado')

  function recebeEventoForm (evento) {
      evento.preventDefault()

      
      let peso = (form.querySelector('#peso'))
      let altura = (form.querySelector('#altura'))

      peso = Number(peso.value)
      altura = Number(altura.value)

      let result = peso / (altura * altura)

      if (Number.isNaN(peso) === true) {
        resultado.innerHTML += `Peso invalido`
        resultado.style = 'background-color: red'
      } else if (Number.isNaN(altura) === true) {
        resultado.innerHTML += `Altura Invalida`
        resultado.style = 'background-color: red'
      } else if (result < 18.5) {
        resultado.innerHTML += `Abaixo do peso`
        resultado.style = 'background-color: green'
      } else if (result > 18.5 && result < 24.9) {
        resultado.innerHTML += `Peso normal`
        resultado.style = 'background-color: green'
      } else if (result > 25 && result < 29.9) {
        resultado.innerHTML += `Sobrepeso`
        resultado.style = 'background-color: green'
      } else if (result > 30 && result < 34.9) {
        resultado.innerHTML += `Obesidade grau 1`
        resultado.style = 'background-color: green'
      } else if (result > 35 && result < 39.9) {
        resultado.innerHTML += `Obesidade grau 2`
        resultado.style = 'background-color: green'
      } else if (result > 40) {
        resultado.innerHTML += `Obesidade grau 3`
        resultado.style = 'background-color: green'
      } else {
        resultado.innerHTML += `Valor invalido`
      }
      
  }
  form.addEventListener('submit', recebeEventoForm)
}
meuArray()