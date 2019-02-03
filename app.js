const game1 = new Hangman('Depika Kelkar',5)
console.log(game1)
const puzzleEl = document.querySelector('#puzzle')
const msgEl = document.querySelector('#msg')

puzzleEl.textContent = game1.Puzzle
msgEl.textContent = game1.Message
console.log(game1.status)

window.addEventListener('keypress',function(event){
    const guess = String.fromCharCode(event.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.Puzzle
    msgEl.textContent = game1.Message
    
    console.log(game1.status)
    // if(game1.status==='finished'){
    //     document.querySelector('#msg').textContent = `Congrutulation You have Guessed the Word`
    // }
    // else if(game1.status==='failed'){
    //     document.querySelector('#msg').textContent = `Better Luck Next Time. The word was ${this.word}`
    // }
     })