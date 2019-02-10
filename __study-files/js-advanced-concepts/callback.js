// Functions are first class objects, meaning you can also pass 
// objects or functions as arguments

let x = () => console.log("Called inside a function: I'm a callback!");

let y = callback => callback();

y(x);