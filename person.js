//module2

//person practice

class Person{
    constructor(firstName='N/A', lastName='N/A', dateOfBirth=new Date(Date.now())) {
        this.firstName=firstName
        this.lastName=lastName
        this.dateOfBirth=dateOfBirth
    }
    getFullName() {
        return `Fullname: ${this.lastName}, ${this.firstName}`
    }
    getAge() {
        return  `Age: ${2022 - this.dateOfBirth.getUTCFullYear()}`
    }
    isEqual(anotherPerson) {
        return this.getFullName().toLowerCase() === anotherPerson.getFullName().toLowerCase()
    }
    toString() {
        return `${this.getFullName()} ${this.getAge()}`
    }
}

let per0 = new Person()
let per1 = new Person('Purin', 'Peerachotikaphan', new Date(2003, 2, 5))
let per2 = new Person('purin', 'peerachotikaphan')
let per3 = new Person('Prayfa', 'Gaewgerd')
console.log(per0.toString())
console.log(per1.getFullName())
console.log(per1.getAge())
console.log(per1.isEqual(per2))
console.log(per1.isEqual(per3))
console.log(per1.toString())