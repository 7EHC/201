function todoUserInterface() {
    function showTodoItem(newId,newDescription){
        let divListTodo = document.getElementById('listTodo')
        // create div
        let newDiv = document.createElement('div')
        newDiv.className = 'todoItem'
        newDiv.setAttribute('id', newId)
        divListTodo.appendChild(newDiv)

        //create p
        let pTag = document.createElement('p')
        pTag.textContent = newDescription
        newDiv.appendChild(pTag)
        
        //create button
        let btnNotDone = document.createElement('button')
        let btnRemove= document.createElement('button')
        btnNotDone.textContent = 'Not done'
        btnRemove.textContent = 'remove'
        newDiv.appendChild(btnNotDone)
        newDiv.appendChild(btnRemove)
    }
    function showNumberOfDone(numberOfDone){
        let pDone = document.getElementById('done')
        pDone.textContent = `Number of Done: ${numberOfDone}`
    }
    function showNumberOfNotDone(numberOfNotDone){
        let pNotDone = document.getElementById('notDone')
        pNotDone.textContent = `Number of Not Done: ${numberOfNotDone}`
    }
    function removeTodoItem(removeId){
        let removeNode = document.getElementById(removeId)
        removeNode.parentElement.removeChild(removeNode)
    }
    return { showTodoItem, showNumberOfDone, showNumberOfNotDone, removeTodoItem}
}

export {todoUserInterface}