//module2
const arr = [
    {name : "A", age: 20, sex: 'm'}, 
    {name : "B", age: 12, sex: 'm'},
    {name : "C", age: 32, sex: 'f'},
    {name : "D", age: 32, sex: 'f'}
  ]
  
  console.log(arr.reduce((count, item) => {
    if(item.sex === 'm'){
      count.push(item.name)
    }
    return count
  }, []))