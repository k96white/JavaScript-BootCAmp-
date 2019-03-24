const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let game1

//puzzleEl.textContent = game1.puzzle
//guessesEl.textContent = game1.statusMessage

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    //puzzleEl.textContent = game1.puzzle
    //guessesEl.textContent = game1.statusMessage
    render()
})

const startGame = async ()=>{
    const puzzle = await getPuzzleNew('2')
    console.log( puzzle)
    game1 = new Hangman(puzzle, 5)
    console.log(puzzle)
    render()
}

const render = () => {
    //puzzleEl.textContent = game1.puzzle
    //puzzleEl.innerHTML = `<span>${game1.puzzle}</span>`
    puzzleEl.innerHTML = ''
    guessesEl.textContent = game1.statusMessage
    
    // MY of Rendering Each  char in Span
    // let str
    // let arr = game1.puzzle.split('')
    // console.log(arr)
    // flag = false
    // arr.forEach(element => {
    //     if(flag){
    //         str = str + `<span>${element}</span>`
    //     }else{
    //         flag=true
    //         str= `<span>${element}</span>`
    //     }
    // });
    // console.log(str)
    // puzzleEl.innerHTML = str
   
    // Andrew Mead Way of Rendering Each  char in Span
    
    game1.puzzle.split('').forEach(letter=>{
        const spanLetterEl  = document.createElement("span")
        spanLetterEl.textContent = letter
        puzzleEl.appendChild(spanLetterEl)
    })

}
// Main App Start
startGame()
document.querySelector('#reset').addEventListener('click',()=>{
   // console.log('Reset Clicked')
    startGame()
})

// getPuzzle('2').then((puzzle) => {
//     console.log(puzzle)
// }, (err) => {
//     console.log(`Error: ${err}`)
// })

//========================Hangman Code Ends================================

// getCountryy('IN').then((country) => {
//     console.log(country.name)
// }, (err) => {
//     console.log(`Error: ${err}`)
// })


// getCountry('US').then(
//     (response)=>{console.log(`Herez UR Country: ${response.name}`)},
//     (response)=>{console.log(`An Error has Occured With Following Msg:${response}`)}
// )

// getCountryyy('AF').then((countryObj)=>{
//     console.log(`alpha2Code ${countryObj.alpha2Code} is ${countryObj.name}`)
// }).catch((error)=>console.log(`An Error has Occured, With Msg: ${error}`))

// getLocation()
// .then((response)=>{ 
//     //console.log(`You are From ${response.city}, ${response.region}, ${response.country}`)
//     return getCountryyy(response.country)
    
// })
// .then((country)=>{
//         console.log(`Hey!!, You are From ${country.name}`)
//     })
// .catch((e)=>{console.log('Msg '+e)})



// getTested()    
// .then(()=>{console.log('3')})
// .then(()=>{console.log('4')})
// .then(()=>{console.log('5')})
// .catch((e)=>{console.log('6 '+e)})