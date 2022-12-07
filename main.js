//module2
let profile = {
    id: 123,
    interest: ['music', 'skiing']
}

profile.interest[0] = 'reading'
console.log(profile)

let student = {id: 123}
let student2 = {id: 123}
let student3 = {id: 1234}

function isEqualStudent(x, y) {
    return x === y
}

console.log(isEqualStudent(student.id, student2.id))
console.log(isEqualStudent(student.id, student3.id))
console.log(isEqualStudent(student2.id, student3.id))