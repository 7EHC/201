//todolist

class Todo{
    static autoId = 1
    constructor(description){
        this.id=Todo.autoId++
        this.description=description
    }
    getTodo() {
        return {id: this.id, description: this.description}
    }
    setDescription(newDescription){
        this.description = newDescription
        return newDescription
    }
}

function todoList() {
    let todos = []
    function addTodo(desc){
        return todos.push(new Todo(desc))
    }

    function removeTodo(removeId) {
        todos = todos.filter((todo) => todo.id !== removeId)
    }

    function findTodo(searchId) {
        todos = todos.find((todo) => todo.id === searchId)
        return todos
    }

    function getTodos() {
        return todos
    }
    return {addTodo, removeTodo, findTodo, getTodos}
}

const {addTodo, removeTodo, findTodo, getTodos} = todoList()
addTodo('hehe')
addTodo('haha')
addTodo('fdsfdsfd')
addTodo('sdsd')
addTodo('aaaa')
addTodo('ggfff')
addTodo('aadasdsd')
console.log(getTodos())
console.log(findTodo(5))


