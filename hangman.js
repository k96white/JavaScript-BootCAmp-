var readline = require('readline-sync');
const arrOfPuzzleData =[]
arrBUWguess = []
arrBURguess = []

// hangman Constructor
const hangman = function( word, chance){
this.word = word
this.chance = chance
}

// Stores Puzzle Data in arrOfPuzzleData[]
const puzzleStore = function( word, chance=10){
    const loWord = word.toLowerCase()
    return arrOfPuzzleData.push(new hangman(loWord,chance))
}

// Prints Puzzle Old Version
const printPuzzle = function(index){
    //console.log('printPuzzle')
    let str='|| Puzzle Word:  '
    arrOfPuzzleData[index].word.split('').forEach((alpabet) => {
             if(alpabet!=' '){
            str += '*'
        }else{
            str += ' '
        }   
    });
   return str += `|| Chance Left ${arrOfPuzzleData[index].chance} ||`
}

// Checks if Entered Word is Repeated i.e Exists in BURguess & BUWguess
const isRepeated = (buGuess) =>
{
    //console.log('isRepeated')
    return arrBUWguess.includes(buGuess) || arrBURguess.includes(buGuess)}
// 0 || 0 = 0
// 1 || 0 = 1
// 0 || 1 = 1
     

// Takes the Input and Calls Methods
const getValidate = function(index){
    //console.log('getValidate')
    var buGuess = readline.question("Guess Letter in this Word: ");
    if(isRepeated(buGuess))
    {
        arrBUWguess.push(buGuess)
        return `'${arrBUWguess.toString()}'. ${buGuess} is Already Guessed`
    }else{       
        isRightGuess(index,buGuess)
    }
    arrBUWguess.push(buGuess)
    //console.log(printPuzzle2(index))
}

// Checks Chances Left
const checkChance = (index) => {
    //console.log('check Chance')
        if(arrOfPuzzleData[index].chance > 0)
        {return true
        }else{
        return false
        }
    }


// Checks if the Word Enter is Present arrOfPuzzleData.word or not
const isRightGuess = function(index,buGuess){
    //console.log('isRightGuess')
    let isMatched=[]
   // console.log(`${index},${buGuess}`)
    //console.log(arrOfPuzzleData[index].word.split(''))
    arrOfPuzzleData[index].word.split('').forEach(
        (alpabet)=>{
            if(alpabet === buGuess)
            {
                isMatched.push(true)
                arrBURguess.push(arrOfPuzzleData[index].word.indexOf(alpabet))
                
            }else{
                isMatched.push(false)
            }
        }); 
    //console.log(isMatched)
    isMatched.includes(true) ? console.log('Correct!! Keep it Up') : arrOfPuzzleData[index].chance-- | console.log(`Wrong!!! you still have Chance Left`)
    //console.log('chance')
    //console.log(arrOfPuzzleData[index].chance) 
}

// New Version  of Printing Puzzle
const printPuzzle2 = function(index){
    //console.log('printPuzzle2')
    const tempSplitArry = arrOfPuzzleData[index].word.split('')
    let str='|| Puzzle Word:  '
    tempSplitArry.forEach((alpabet) => {
             if(alpabet===' '){
                str += ' '
            }else if(arrBURguess.includes(tempSplitArry.indexOf(alpabet))){
                str += alpabet    
            }else{
                str += '*'
            }   
    });
   return str += '\n||Chance Left '+arrOfPuzzleData[index].chance+'\n'
}

// Checks if all Words are Guessed
const isWinner = function(which){
   // console.log(arrOfPuzzleData[which].word.split('').length === arrBURguess.length)
    return arrOfPuzzleData[which].word.split('').length === arrBURguess.length
}

// Main Class
const GameMainClass = function(which)
{
//    console.log('Main')
///////////////////////////
//console.log('//////////////')

while(arrOfPuzzleData[which].chance>0){
    console.log(printPuzzle2(which))
    if(isWinner(which)){
        console.log(`you win`);
    break
    }else{getValidate(which)}
}
console.log("Game Over")
console.log('arrBUWguess+arrBURguess')
console.log(arrBUWguess)
console.log(arrBURguess)
}




console.log(puzzleStore('sea',3))
console.log(puzzleStore('xerox',4))
console.log(puzzleStore('Navi Mumbai',10))
console.log(arrOfPuzzleData+'\n')
GameMainClass(0)

