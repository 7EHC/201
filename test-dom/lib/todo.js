class Todo {
    static num = 1
    constructor(description,done = false){
        this.id = Todo.num++
        this.description = description
        this.done = done
    }
    getTodos(){
        return `{ ${this.id}, ${this.description}, ${this.done} }`
    }
    setDescription(newDescription){
         this.description = newDescription
    }
    setDone(value){
        this.done = value
    }
}

// module.exports = Todo
export {Todo}