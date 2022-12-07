//module2
 //Pure function
function fn(a, b) {
  return a + b;
}

console.log(fn(10, 5));

// Avoid side effect
let c = 1;

function fn2(a) {
  return a + c;
}

console.log(fn2(10));

// 3. **First class function**
//     - **Returning a function**
//     - **Passing a function as an argument**
//     - **Assigning a function to a variable**

function fn3(a, b){
  return function(){
    return a + b
  }
}

let ans = fn3(1,2)// function(){return 1 + 2}

console.log(ans())

function fn4(fn, a, b) {
  return fn(a, b);
}

function sum(x, y) {
  return x + y;
}

console.log(fn4(sum, 1, 2));