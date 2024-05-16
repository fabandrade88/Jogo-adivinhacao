//Variaveis

const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnRest = document.querySelector("#btnReset")

let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

//Eventos

btnTry.addEventListener('click', handleClick)
btnRest.addEventListener('click', handleResetClick)

document.addEventListener('keydown', function(e) {
  if(e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
})

//Funcao callback

function handleClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")

  handleCheck()

  inputNumber.value = ""
  xAttempts++

}

function handleCheck() {
  if (Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10) {
    alert("Escreva numero entre 0 e 10")
 } 
 
  if (Number(inputNumber.value) == randomNumber) {
   toggleScreen()
   screen2.querySelector("h2").innerText = `acertou em ${xAttempts} tentativas`
 }

}

function handleResetClick (){
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
} 

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}
