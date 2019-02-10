// DIFFERENCE BETWEEN VAR AND LET

// var has only function scope and is hoisted

console.log(b); //undefined because of hoisting
if(3 < 5){
  var b = 10;
}

console.log(b); //i can call it because if is just a block

// let has block scope
function functionTwo(){
  let c = 15;
}

console.log(c) //ReferenceError: c is not defined