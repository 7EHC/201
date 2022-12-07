//module2
//recursion
function fn(n){
    if(n === 1) return 1;
    return n * fn(n-1) // 5 * fn(4) -> 4 * fn(3) --> fn =
  }
  
  console.log(fn(5))