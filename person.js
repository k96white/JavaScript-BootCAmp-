// Prototype Inherience
//myPerson->Person.Prototype->Object.protype->null

class Person{
    constructor( firstName='God',lastName='Father', age='Ageless' , arHobby=['Everything'] ) {    
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.arHobby = arHobby
    }
    getBio(){
        let bio = `Bio => ${this.firstName} is ${this.age}`

        this.arHobby.forEach((hobby)=>{
        bio += `, ${this.firstName} likes ${hobby}`
        })
    return bio
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}// Person Class Ends

class Employee extends Person{
    constructor( firstName, lastName, age, position, arHobby ){
        super(firstName, lastName, age, arHobby)
        this.position = position
    }
    getBio(){
        // Andrew is a Emgineer
        return `${this.firstName} ${this.lastName} is a ${this.position}`
    }
    getYearsLeft(){
        // Years Left for Retirement
        return `${65 - this.age} Years Left for Retirement`
    }
}// Employee Class Ends

class Student extends Person{
    constructor(firstName, lastName, age, grade=70, arHobby){
        super(firstName, lastName, age, arHobby)
        this.grade = grade
        this.status = grade>=70 ? 'Passes' : 'Fails' // Fails Or Passes
    }


    updateGrade(grade){
        this.grade += grade
        if( this.grade<70 ){
            this.status = 'Fails'
        }
    } 
    
    getBio(){
        // Anderw Fails the Class
        return `${this.firstName} ${this.status} the Class`
    }

}// Student Class Ends

const std = new Student('Vaishali','Samant', 16, 70, ['Cricket'])
console.log(std)
console.log(std.fullName)
console.log(std.getBio())
/*
console.log( std.getBio() )
std.updateGrade(-10)
console.log( std.getBio() )
*/
/*
const me = new Employee('Andrew', 'Mead', 27,"Engineer", ['Teaching', 'Travelling'])
me.setName('Keshav Williums')
console.log(me.getBio())
console.log(me.getYearsLeft())
//console.log(myPerson.getBio())
*/
/*
const person = function(fullName='God', age='Ageless' , arHobby=['Everything']){
    // function we have this & arguments
    this.fullName = fullName
    this.age = age
    this.arHobby = arHobby
    console.log(arguments)
}
*/
/*
person.prototype.getBio = function(){
    firstNameAt0 = this.fullName.split(' ')
    bio = `${firstNameAt0[0]} is ${this.age}`

    this.arHobby.forEach((hobby)=>{
        bio += `, ${firstNameAt0[0]} likes ${hobby}.`
    })
    return bio
}
*/
/*
const p1 = new Person('RK', 'Kapoor', 22, ['Travelling', 'Fooding'])

const p2 = new Person('Robin', 'Singh', 77 )
const p3 = new Person()
console.log(p1.getBio())
console.log(p2.getBio())
console.log(p3.getBio())

p2.setName('Madhura Gawali')
console.log(p2.getBio())
*/