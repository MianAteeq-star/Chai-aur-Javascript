const randomNumber = parseInt(Math.random() * 100 + 1)
//  console.log(randomNumber);

const userInputValue = document.querySelector("#userValue")
const submitButton = document.querySelector("#submitBtn")
const remainingGuesses = document.querySelector(".remaining")
const previousValues = document.querySelector("#previous")
const gameOverResult = document.querySelector("#prev")
const resultMessage = document.querySelector("#result")
const form = document.querySelector("form")


let remainingValues = 1
let previousGuess = []
let playGame = true

const p = document.createElement("p")

if (playGame) {
    submitButton.addEventListener("click", function (e) {
        e.preventDefault()
        const userValue = parseInt(userInputValue.value)


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
                playGame = false
            } else {

                checkGuess(userValue)
                displayGuess(userValue)
            }
        }
    })
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        alertMessage(`You got it! The number was ${randomNumber}`)
        endGame()
        playGame = false
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
    remainingGuesses.innerHTML = `${11 - remainingValues}`
    previousValues.innerHTML += ` ${guess} `
    remainingValues++
}

function endGame (game ){
    userInputValue = "";
    userInputValue.setAttribute("disabled", "")
p.classList.add("button")
p.innerHTML = ` <h1 id="newGame">Start new Game</h1>`
gameOverResult.appendChild( p )
playGame= false
newGame()
}
function newGame (game ){
    userInputValue = "";
    playGame= true
    previousGuess = []
    remainingValues
}

