//module2
class Students{
    static countId = 1
    constructor(name) {
        this.name = name
        this.id = Students.countId++
    }
    getInfo(){
        return {name: this.name, id: this.id}
    }
}

let std1 = new Students("A")
let std2 = new Students("A")
let std3 = new Students("A")
let std4 = new Students("A")

console.log(std1.getInfo(), std2.getInfo(), std3.getInfo(), std4.getInfo())