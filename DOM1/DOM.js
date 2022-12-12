//root node มี type เป็น DOCUMENT_NODE(value=9)
const rootNode = window.document
console.log(rootNode)

//root element (html)
const rootElement = document.documentElement
console.log(rootElement)

//child node === all node types of html's children nodes
const childNodesGetAll = rootElement.childNodes
console.log(childNodesGetAll)
console.log(childNodesGetAll[0]) //array-like
console.log(childNodesGetAll.length) //array-like

//children === onl element types of html's children nodes   
const chilDrenGetElement = rootElement.children
console.log(chilDrenGetElement)
console.log(chilDrenGetElement[chilDrenGetElement.length-1]) //array-like
console.log(chilDrenGetElement.length) //array-like

//1.create a new p element
const newPElementNode = document.createElement("p")

//2.create a new attribute
const newAttrNode = document.createAttribute("class")
newAttrNode.value="courses"

//3.create a new text
const newTextNode = document.createTextNode("INT201")

//4.add attribute to its owner tag(<p>)
newPElementNode.setAttributeNode(newAttrNode)

//5. add text node to parent node (tag <p>) (use appendChild)
newPElementNode.appendChild(newTextNode)

//6. query wanted node in document
const parentNode = document.getElementById("myApp") //ถ้าแท็กนั้นเป็นไอดี ใช้ getElementById ได้เลย

//add new element into wanted parent tag <div id="myApp"> (appendChild)
parentNode.appendChild(newPElementNode)
console.log(parentNode)

//check node type, node name, node value
console.log(parentNode.nodeType) //1 คือ value ของ ELEMENT_NODE
console.log(parentNode.nodeName) //div (ชื่อแท็กนั้นๆ)
console.log(parentNode.nodeValue) //null value ของ element เป็น null

console.log(rootElement.nodeType)
console.log(rootElement.nodeName)
console.log(rootElement.nodeValue)

console.log(rootNode.nodeType) //9 คือ DOCUMENT_NODE
console.log(rootNode.nodeName)
console.log(rootNode.nodeValue)

console.log(newAttrNode.ownerElement) //เช็ค owner element(เจ้าของ) ของ attribute

//3 วิธีการสร้าง text
console.log(parentNode.innerText) //สร้างแบบนี้จะรวม white space เป็น 1
console.log(parentNode.textContent) //แบบนี้จะนับ white space ทุกตัวที่เราเคาะเว้น (สองวิธีแรกถ้าเราใส่ <> ลงไปใน text มันจะอ่านเป็น text ธรรมดา เวลาแสดงผลก็จะแสดง <> ออกมา)
console.log(parentNode.innerHTML) //แบบนี้จะอ่านค่า <> ต่างๆ เวลาเราใส่ลงไปได้ เช่นเราเพิ่มคำว่า <span>12345</span> ตัว innerHTML ก็จะอ่านค่าตัว <span> ด้วย ไม่แสดงออกมาเป็น text

//วิธีสร้างอีก 1 วิธี
const newElement = document.createElement('p')
newElement.setAttribute('class', 'subj') //set attribute ให้ owner element แบบนี้ได้เหมือนกัน แต่ว่าจะไม่สามารถอ้างถึงตัวแปร attribute ได้ (class)
                                        // ถ้าต้องการให้อ้างถึง class ได้ ต้องสร้างแบบวิธีด้านบนก็คือ สร้างตัวแปรมารับค่า createAttribute และใช้ชื่อตัวแปร .value
                                        //จากนั้นก็ทำการเพิ่ม attribute ที่สร้างไว้ด้วยการนำตัวแปรที่เก็บ owner element .setAttribute
newElement.innerText = 'JavaScript' //เพิ่ม text เข้าไปใน p element

parentNode.appendChild(newElement) //เพิ่มแท็ก p ที่สร้างใหม่เข้าไปใน parent node หรือ แท็กที่่เราต้องการใส่เข้าไป

console.log(parentNode.previousElementSibling)
console.log(parentNode.nextElementSibling)
console.log(parentNode.parentElement)
console.log(parentNode.children)


