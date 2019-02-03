// hangman Constructor

class Hangman{
    constructor(word, remainingGuesses){
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = 'playing'
    }

    get Puzzle(){
        console.log('In getter Puzzle')
        let puzzle = ''
        this.word.forEach(letter => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                puzzle += letter
            } else {
                puzzle += '*'
            }
        });
        return puzzle    
    }

    makeGuess(guess){
        if (this.status !== 'playing') {
            return
        }
        console.log('After makeGuess return statement')
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.word.includes(guess)
        if (isUnique) {
        this.guessedLetters.push(guess)
        }
        if (isUnique && isBadGuess) {
            this.remainingGuesses--
        }
        this.updateStatus()            
    }

    updateStatus(){
        const isChanceLive = this.remainingGuesses ? true : false
        const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')

        if (this.remainingGuesses === 0) {
            this.status = 'failed'
        }
        else if (isChanceLive && finished) {
            this.status = 'finished'
        }
    }

    get Message(){
        console.log('In getter Msg')
        if (this.status === 'playing') {
            return `Guesses Remaining : ${this.remainingGuesses}`
        }
        else if (this.status === 'failed') {
            return `Better Luck Next Time. The word was ${this.word.join('').toUpperCase()}`
        }
        else if (this.status === 'finished') {
            return `Congratulation You have Guessed the Word`
        }    
    }

}// class HangMan Ends

/*
const Hangman = function () {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
    this.status = 'playing'
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = ''
    this.word.forEach(letter => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    });


    return puzzle
}

Hangman.prototype.makeGuess = function (guess) {
    if (this.status !== 'playing') {
        return
    }
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)
    if (isUnique) {
        this.guessedLetters.push(guess)
    }
    if (isUnique && isBadGuess) {
        this.remainingGuesses--
    }
    this.updateStatus()
}

Hangman.prototype.updateStatus = function () {

    const isChanceLive = this.remainingGuesses ? true : false
    let finished = this.word.every((letter) => this.guessedLetters.includes(letter))
    // this.word.forEach((letter)=>{
    //     if( this.guessedLetters.includes(letter) ){
    //         finished = true
    //     }else{
    //         finished = false
    //     }
    // })

    //   const letterUnGuessed =  this.word.filter((letter) => {
    //         !this.guessedLetters.includes(letter)
    //     })
    if (this.remainingGuesses === 0) {
        this.status = 'failed'
    }
    else if (isChanceLive && finished) {
        this.status = 'finished'
    }
}


Hangman.prototype.gettMessage = function() {
    if (this.status === 'playing') {
        return `Guesses Remaining : ${this.remainingGuesses}`
    }
    else if (this.status === 'failed') {
        return `Better Luck Next Time. The word was ${this.word.join('').toUpperCase()}`
    }
    else if (this.status === 'finished') {
        return `Congrutulation You have Guessed the Word`
    }
}
*/
