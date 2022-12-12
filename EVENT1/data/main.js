import { students } from "./students.js";
import { lecturers } from "./lecturers.js";

const divButton = document.getElementById('buttonPanel')
console.log(divButton)
const stuButton = divButton.children[0]
// console.log(stuButton)
const lecButton = divButton.children[1]
// console.log(lecButton)

// function stuBtHandler() {
//     const stuHandler = document.querySelector('ul')
//     stuHandler.textContent = ""
//     students.forEach(x => {
//         const stuElement = document.createElement('li')
//         stuElement.textContent = `ID: ${x.id}, NAME: ${x.name}`
//         stuHandler.appendChild(stuElement)
//     })
// }
// stuButton.addEventListener('click', stuBtHandler, false)

// function lecBtHandler() {
//     const lecHandler = document.querySelector('ul')
//     lecHandler.textContent = ""
//     lecturers.forEach(x => {
//         const lecElement = document.createElement('li')
//         lecElement.textContent = `ID: ${x.id}, NAME: ${x.name}`
//         lecHandler.appendChild(lecElement)
//     })
// }
// lecButton.addEventListener('click', lecBtHandler, false)

function lecBtHandler() {
    button(lecturers)
}

function stuBtHandler() {
    button(students)
}

function button(items) {
    const ulHandler = document.querySelector('ul')
    ulHandler.textContent = ""
    items.forEach(x => {
        for(const key in x) {
        const liElement = document.createElement('li')
        liElement.textContent = `${key} ${x[key]}`
        ulHandler.appendChild(liElement)
    }})
}
stuButton.addEventListener('click', stuBtHandler, false)
lecButton.addEventListener('click', lecBtHandler, false)


// stuButton.addEventListener('click', () => {
//     let typeName = prompt('Please identify your information')
//     alert(`Hi, ${typeName}`)
// }, false)

// function stuButtonHandler() {
//     alert('2nd student handler')
// }
// stuButton.addEventListener('click', stuButtonHandler, false)
// stuButton.removeEventListener('click', stuButtonHandler, false)
