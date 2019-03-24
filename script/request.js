const getPuzzleNew = async (wordCount) => {
   
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if(response.status===200){
        const data = await response.json()
        //console.log(data)
        return data.puzzle

    }else{
        throw new Error('Unable to Fetch Puzzle')
    }
}



// Creating Promise Manually - for Puzzle
const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            resolve(data.puzzle)
        } else if (e.target.readyState === 4) {
            reject('An error has taken place')
        }
    })

    request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    request.send()
})

//================================HangMan Code Ends====================================================

// Creating Promise Manually - for Country
const getCountry = (countryCode) => new Promise((resolve, reject) => {
    const countryRequest = new XMLHttpRequest()

    countryRequest.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            const country = data.find((country) => country.alpha2Code === countryCode)
            resolve(country)
        } else if (e.target.readyState === 4) {
            reject('Unable to fetch data')
        }
    })

    countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
    countryRequest.send()
})

// Creating Promise Manually- for Country - Copy of Above 
const getCountryy = (CC) => new Promise((resolve, reject)=>{
    const CR = new XMLHttpRequest()

    CR.addEventListener('readystatechange',(event)=>{
        if(event.target.readyState === 4 && event.target.status === 200){
            const data = JSON.parse(event.target.responseText)
            const country = data.find((country)=>country.alpha2Code === CC)
            resolve(country)
        }else if (event.target.readyState===4){
            reject('Server is Down')
        }
    })

    CR.open('GET','http://restcountries.eu/rest/v2/all');
    CR.send();
})


// Fetch API Sample
const getCountryyy = (CC)=>{
    return fetch('http://restcountries.eu/rest/v2/all').then((responseBody)=>{
        if(responseBody.status === 200){
            return responseBody.json()
        }else{
            new Error('Unable to Fetch')
        }

    }).then((jsonResponse)=>{
        console.log(jsonResponse.find((countryObj)=>countryObj.alpha2Code === CC))
        return jsonResponse.find((countryObj)=>countryObj.alpha2Code === CC)
         
    }).catch((error)=> console.log(error))
}

const getLocation = () => {
    return fetch('http://ipinfo.io/json?token=74cdb67eceaf2c')
            .then((response)=>{
                if(response.status == 200){
                return response.json()
                }
                else{
                throw new Error('Abort')
                }
            })
}

const getTested = () => {
  return  fetch('http://ipinfo.io/json?token=74cdb67eceaf2c')
.then(()=>{console.log('1')})
.then(()=>{
    console.log('2')
    throw new Error('error123456')
    })
}

