//module 2

//json

//วิธีเช็ค empty ของ object
//วิธี 1 ใช้ JSON.stringify()
let eo = {}

function emptyObjByJSON(obj) {
    return JSON.stringify(obj) === '{}' 
}

console.log(emptyObjByJSON(eo))

//วิธี 2 ใช้ Object.keys()

function emptyObjByObjKeys(obj) {
    return Object.keys(obj).length === 0
}
console.log(emptyObjByObjKeys(eo))


