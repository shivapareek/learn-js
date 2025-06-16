let randomNumber = parseInt(Math.random() * 100  + 1 );

const form = document.querySelector('form')
const guessInput = document.querySelector('#guess')
const previousGuess = document.querySelector('#prevguess')
const remaining = document.querySelector('#remaining')
const lowOrHigh = document.querySelector('.lowOrHigh')
const gameInfo = document.querySelector('#gameInfo')
const submitbtn = document.querySelector('#submit')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1
let playGame = true

if(playGame){
    form.addEventListener('submit' , function(e){
    e.preventDefault()
    const guessvalue = parseInt(guessInput.value)
    validateGuess(guessvalue)
    
})
}

function validateGuess(guess){
    prevGuess.push(guess)
    if(numGuess === 10 ){
        displayGuess(guess)
        displayMessgae(`Game Over. Random number was ${randomNumber}.`)
        endGame()
    }
    else{
         displayGuess(guess)
         checkGuess(guess)
    }
}

function checkGuess(guess){
     if (guess === randomNumber){
        displayMessgae("🎉 You guessed it right.")
        confetti(); // on correct guess
        endGame()
     } else if (guess < randomNumber ){
        displayMessgae("Number is too low")
     } else if (guess > randomNumber ){
        displayMessgae("Number is too high")
     }
}

function displayGuess(guess){
       guessInput.value = ""

    previousGuess.innerHTML = prevGuess.join(', ');
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessgae(message){
    lowOrHigh.innerHTML = `${message}`
}


function endGame(){
    guessInput.value = ''
    guessInput.setAttribute("disabled" , "")
    submitbtn.setAttribute("disabled" , "")
    p.classList.add('button')
    p.innerHTML = `<button id = 'newGame'  class="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition duration-200"> Start New game</button>`;
    gameInfo.appendChild(p)
    playGame = false
    newGame()
}
function newGame(){
   const newGameBtn =  document.querySelector('#newGame')
   newGameBtn.addEventListener('click' , function (e){
       displayMessgae("")
    randomNumber = parseInt(Math.random() * 100  + 1 );
    prevGuess = []
    numGuess = 1
    previousGuess.innerHTML = ""
    remaining.innerHTML = `${11 - numGuess}`
    guessInput.removeAttribute('disabled')
    submitbtn.removeAttribute('disabled')
    gameInfo.removeChild(p)


    playGame =true
   })
}


