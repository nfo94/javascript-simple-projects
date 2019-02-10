// DIFFERENCE BETWEEN LET AND CONST

// both are block scoped, but you cannot reassign const

let a = 10;
a = 15;
console.log(a);

const b = 20;
b = 25;
console.log(b); //TypeError: Assignment to constant variable

// const can be modified but not reassigned
const c = [1, 2, 3];
c.push(4);
console.log(c); //[1, 2, 3, 4]