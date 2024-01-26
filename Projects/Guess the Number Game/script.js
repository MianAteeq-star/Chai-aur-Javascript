let randomNumber = parseInt(Math.random() * 100 + 1)

const userInputValue = document.querySelector("#userValue")
const submitButton = document.querySelector("#submitBtn")
const remainingGuesses = document.querySelector(".remaining")
const previousValues = document.querySelector("#previous")
const gameOverResult = document.querySelector("#prev")
const resultMessage = document.querySelector("#result")


let remainingValues = 1
let previousGuess = []
let playGame = true

const p = document.createElement("p")

if (playGame) {
    submitButton.addEventListener("click", function (e) {
        e.preventDefault()
        const userValue = parseInt(userInputValue.value)

validate(userValue)
    
    })
}
function validate(userValue){
    if (isNaN(userValue)) {
        alertMessage("Please enter a valid number")
    } else if (userValue < 1) {
        alertMessage("Please enter a valid")
    }
    else if (userValue > 100) {
        alertMessage("Please enter number less than 100")
    } else {

        previousGuess.push(userValue)
        if (remainingValues == 11) {
            displayGuess(userValue)
            alertMessage(`Game over. Random number was ${randomNumber} `)
            endGame()
            
        } else {

            checkGuess(userValue)
            displayGuess(userValue)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        alertMessage(`You got it! The number was ${randomNumber}`)
        endGame()
    
    } else if (guess > randomNumber) {
        alertMessage(`Your guess is too high. `)
    }
    else if (guess < randomNumber) {
        alertMessage(`Your guess is too low. `)
    }
}

function alertMessage(message) {
    resultMessage.innerHTML = `<h2>${message}</h2>`

}

function displayGuess(guess) {
    userInputValue.value = "";
    previousValues.innerHTML += ` ${guess} `
    remainingValues++
    remainingGuesses.innerHTML = `${11 - remainingValues}`
}

function endGame (){
    userInputValue.value = "";
    userInputValue.setAttribute('disabled', "")
    p.classList.add("button")
    p.style.fontSize= "20px"
    p.style.color = "white"
    p.innerHTML = '<h1 id="newGame">Start new Game</h1>';
     gameOverResult.appendChild(p);
    playGame= false
    newGame()
}
function newGame (){
    const newGameResult = document.querySelector('#newGame');
    console.log(newGameResult);
    
    newGameResult.addEventListener("click", function (e) {
        e.preventDefault()
        randomNumber = parseInt(Math.random() * 100 + 1)
        userInputValue.value = "";
        previousGuess = []
        remainingValues = 1
        remainingGuesses.innerHTML = ` ${11 - remainingValues}`
        userInputValue.removeAttribute('disabled')
        gameOverResult.removeChild(p)
        playGame= true
    
    })
}

