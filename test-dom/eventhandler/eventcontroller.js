import { todoUserInterface } from '../UI/todoListUi.js'
import { Todo } from "../lib/todo.js"
import {TodoListManageMent} from  '../lib/todoManagement.js'

const { showTodoItem, showNumberOfDone, showNumberOfNotDone, removeTodoItem} =  todoUserInterface()
const {addTodo, removeTodo, findTodo,getNumberOfDone, getNumberOfNotDone,setItemToDone, getTodos} = TodoListManageMent() 

let inputText = document.querySelector('input')
let addBtn = document.getElementById('addBtn')
// let divListTodo = document.getElementById('listTodo')
// let divTodoItem = document.getElementsByClassName('todoItem')


const addTodoHandler = () => {
    if(inputText.value.trim().length !== 0){
        let getId = addTodo(inputText.value)
        showTodoItem(getId, inputText.value)
        addButtonHandler(getId)
    } else {
        alert('ไม่มีรายการ Todo ที่จะแอด')
    }
    showNumberOfDone(getNumberOfDone())
    showNumberOfNotDone(getNumberOfNotDone())
}

const addButtonHandler = (todoId) => {
    let btnNotDone = document.getElementById(todoId).children[1].addEventListener('click',notDoneButtonHandler)
    let btnRemove = document.getElementById(todoId).children[2].addEventListener('click',removeButtonHandler)
}


const notDoneButtonHandler = (event) => {
  let target = event.target
  target.textContent = 'done'
  target.style = 'background-color : green ; color:white'
  setItemToDone(target.parentElement.getAttribute('id'))
  showNumberOfDone(getNumberOfDone())
  showNumberOfNotDone(getNumberOfNotDone())
}

const removeButtonHandler = (event) => {
  let target = event.target
  removeTodoItem(target.parentElement.getAttribute('id')) //dom
  removeTodo(Number(target.parentElement.getAttribute('id'))) // todos=[]
  showNumberOfDone(getNumberOfDone())
  showNumberOfNotDone(getNumberOfNotDone())
}





// addEvent 
addBtn.addEventListener('click',addTodoHandler)
inputText.addEventListener('keypress', (event) => {
    if(event.key === 'Enter')
    showTodoItem(addTodo(inputText), inputText.value)
})