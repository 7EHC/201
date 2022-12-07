//module2
function isImageFileExtension(fileName) {
    if (fileName === null || fileName === undefined){
        return false
    } else if (fileName.includes('.png') || fileName.includes('.jpg') || fileName.includes('.jpeg') || fileName.includes('.gif') || fileName.includes('.svg')) {
        return true
    } else {
        return false
    }
}

console.log(isImageFileExtension('sample.jpeg'))
console.log(isImageFileExtension('myPic.jpg'))
console.log(isImageFileExtension('product.gif'))
console.log(isImageFileExtension('img.svg'))
console.log(isImageFileExtension('student.png'))
console.log(isImageFileExtension('x.doc'))
console.log(isImageFileExtension('y.pdf'))
console.log(isImageFileExtension(null))
console.log(isImageFileExtension(undefined))

// function dosomething(x) {
//     x[1] = 5
// }

// const arr = [1,2,3]
// dosomething(arr)
// console.log(arr)