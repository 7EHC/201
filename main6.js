

// moreThanFive=value=>value > 5
let nums = [1,2,3,4,5,6,7,8,9,10,11,221,2,1515,15165,4654,6]
let moreNums = nums.filter(num => num > 5)
// console.log(nums)
console.log(moreNums)


function addNum(a, b) {
    function multi(x) {
        return x*x
    }
    return multi(a) + multi(b)
}

console.log(addNum(20, 20))

const addNum2=(a, b) => {
    const multi2 = x => x*x
    return multi2(a) + multi2(b)
}

console.log(addNum2(10, 10))


//forEach
const students=[{id:1, name:'Somchai'}, {id:2, name:'Somsri'}, {id:3, name:'Chujai'}]
let studentId = []
students.forEach(student => studentId.push({id: student.id}))
console.log(studentId)

const student2 = students.map(student => student.id)
console.log(student2)

//findindex
const num1 = [5, 6, 4, 8, 10, 12, 9, 50]
console.log(num1.findIndex(num => num >= 10))
let num2 = num1.slice(5)
console.log(num2.findIndex(num => num >= 10))