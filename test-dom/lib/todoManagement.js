// const Todo = require('./todo.js')
import {Todo} from './todo.js'
function TodoListManageMent() {
    let todos = []
    function addTodo(desc){
        let newId = new Todo(desc)
        todos.push(newId)
        return newId.id
    }
    function removeTodo(removeId){
        return todos = todos.filter(x => x.id !== removeId)
    }
    function findTodo(searchId){
        return todos.filter(x => x.id == searchId)
    }
    function getNumberOfDone(){
        return todos.filter((todo) => todo.done === true).length
    }
    function getNumberOfNotDone(){
        return todos.filter((todo) => todo.done !== true).length
    }
    function setItemToDone(doneId){
        let doneItem =  todos.find((todo) => todo.id === Number(doneId))
        doneItem.setDone(true)
    }
    function getTodos(){
        return todos
    }
    return {addTodo, removeTodo, findTodo,getNumberOfDone, getNumberOfNotDone,setItemToDone, getTodos}
}

// module.exports = TodoListManageMent
export {TodoListManageMent}


