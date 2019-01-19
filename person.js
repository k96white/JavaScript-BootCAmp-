const person = function(fullName='God', age='Ageless' , arHobby=['Everything']){
    // function we have this & arguments
    this.fullName = fullName
    this.age = age
    this.arHobby = arHobby
    console.log(arguments)
}

person.prototype.getBio = function(){
    firstNameAt0 = this.fullName.split(' ')
    bio = `${firstNameAt0[0]} is ${this.age}`

    this.arHobby.forEach((hobby)=>{
        bio += `, ${firstNameAt0[0]} likes ${hobby}.`
    })
    return bio
}

const p1 = new person('RK Kapoor', 22, ['Travelling', 'Fooding'])

const p2 = new person('Robin Singh', 77 )
const p3 = new person()
console.log(p1.getBio())
console.log(p2.getBio())
console.log(p3.getBio())
