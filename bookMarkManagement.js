const { template } = require('@babel/core')
//write your student id, firstname, and lastname here
//64130500069 Purin Peerachotikaphan
class BookMark {
  //code here
  // constructor(isbn, totalPages = 0){
  //   this.isbn = isbn
  //   this.totalPages = totalPages
  //   this.bookMarks = []
  // }

  // addBookMark(pageNumber) {
  //   if(pageNumber >= 1 && pageNumber <= this.totalPages) {
  //     this.bookMarks.push(pageNumber)
  //   }
  //   return this.bookMarks.length
  // }
  
  // removeBookMark(pageNumber) {
  //   const beforeRemove = this.bookMarks.length
  //   this.bookMarks = this.bookMarks.filter((bookMark) => bookMark !== pageNumber)
  //   if(beforeRemove===this.bookMarks.length){
  //     return undefined
  //   } else{
  //     return pageNumber
  //   }
  // }

  // goToFirstBookMark() {
  //   if(this.bookMarks.length === 0) {
  //     return undefined
  //   }else {
  //     return this.bookMarks[0]
  //   }
  // }

  // goToLastBookMark() {
  //   if(this.bookMarks.length === 0) {
  //     return undefined 
  //   }else {
  //   return this.bookMarks[this.bookMarks.length-1]
  //   }
  // }

  // getBookMarks() {
  //   return this.bookMarks
  // }
  constructor(isbn, totalPages = 0){
    this.isbn = isbn
    this.totalPages = totalPages
    this.bookMarks = []
  }

  addBookMark(pageNumber) {
    if(pageNumber >= 1 && pageNumber <= this.totalPages){
      this.bookMarks.push(pageNumber)
    } 
    return this.bookMarks.length
  }

  removeBookMark(pageNumber) {
    if(this.bookMarks.includes(pageNumber)) {
      let removePage = this.bookMarks.indexOf(pageNumber)
      this.bookMarks.splice(removePage, 1)
      return pageNumber
    }
      return undefined
  }

  goToFirstBookMark() {
    return this.bookMarks[0]
  }

  goToLastBookMark() {
    return this.bookMarks[this.bookMarks.length-1]
  }

  getBookMarks() {
    return this.bookMarks
  }

}
module.exports = BookMark
