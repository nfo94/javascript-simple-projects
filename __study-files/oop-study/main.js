/**
 * - Objects have properties and methods with key-value pairs 
 * - Arrays are objects 
 * - Primitive types are not objects (boolean, string, number, symbol, null, undefined)
 * - But primitives can behave like objects because javascript can wrap them in an object
 */

let userOne = {
  email: 'nfo@ninja',
  name: 'Nat',
  login(){
    console.log(this.email, 'has logged in');
  },
  logout(){
    console.log(this.email, 'has logged out');
  }
};

console.log(userOne.name);