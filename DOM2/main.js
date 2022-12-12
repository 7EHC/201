// const parentUl = document.querySelector('ul')
// console.log(parentUl)

const parentAll = document.getElementsByTagName('ul')
const parentUl = parentAll[0]
console.log(parentUl)

const li1 = document.createElement('li')
// li1.setAttribute('class', 'dev')
li1.className='dev'
li1.textContent = 'INT101- Java Programming I'

parentUl.appendChild(li1)

const li2 = document.createElement('li')
li2.setAttribute('class', 'dev')
li2.textContent = 'INT202-Server Side I'

parentUl.appendChild(li2)


//insert node .insertBefore(newNode, referenceNode)
const parentDiv = document.getElementById('summary') //query parent
console.log(parentDiv) 

const DivChildren = parentDiv.children[1] //query parent's children
console.log(DivChildren)

const newPtag = document.createElement('p')
newPtag.setAttribute('class', 'devops')
newPtag.textContent = 4
parentDiv.insertBefore(newPtag, DivChildren) //insert newPtag = new element node, DivChildren = reference node


//replace node .replaceChild(newNode, oldNode)
const parentU = document.querySelector('.lecturers') //query parent
console.log(parentU)

const ulChildren = parentU.children[1] //query parent's children
console.log(ulChildren)

const newLi = document.createElement('li')
newLi.textContent = 'Ajarn Saichon Jaiyen'
parentU.replaceChild(newLi, ulChildren) //replace newLi = new element node, ulChildren = old element node


//remove node .removeChild(removeNode)
const removeUlChildren = parentU.lastElementChild //query remove node
parentU.removeChild(removeUlChildren) //remove removeUlChildren = queried node

