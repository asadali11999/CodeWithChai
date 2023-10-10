const randomNumber = parseInt(Math.random() * 20 + 1)
console.log(randomNumber);

const submit = document.querySelector('#subt');
const userInput =document.querySelector('#guessField');
const guessSlot =document.querySelector('.guesses');
const remaining =document.querySelector('.lastResult');
const lowOrHi =document.querySelector('.lowOrHi');
const startOver =document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGuess =[]
let numGuess = 1
 let playGame = true

if (playGame) {
    submit.addEventListener('click' , function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })

    
}

 function validateGuess  (guess){
        if (isNaN(guess)) {
            alert ('is not a number' )
            
        } else if (guess < 1){
            alert('please enter a number bigger than 1')
        }else if (guess > 20){
            alert('please enter a number smaller than 20')
        } else{
            prevGuess.push(guess)
            if(numGuess === 11){
               displayGuess(guess)
               displayMessage(`Game Over ; Rndom number was ${randomNumber}`)
                endGame()
            } else{
               displayGuess(guess)
               checkGuess(guess)



            }

        }
 }
 function checkGuess  (guess){
    if (guess === randomNumber) {
        
        displayMessage(`you guess it Right `)
        endGame()
    } else if (guess < randomNumber) {
        displayMessage(`Number is too low  `)
    }
    else if (guess > randomNumber) {
        displayMessage(`Number is too high  `)
    }
 }
 function displayGuess  (guess){
    displayGuess.value = ""
    guessSlot.innerHTML += `${guess} ,  `
    numGuess ++;
    remaining.innerHTML = `${11 - numGuess}`
 }

 function displayMessage  (message){
    lowOrHi.innerHTML = `<h2>${message} </h2>`
 }
 function endGame  (){
    userInput.value = ""
    userInput.setAttribute("disabled", "")
    p.classList.add("button")
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()


 }
 function newGame  (){
    //
 }
 








