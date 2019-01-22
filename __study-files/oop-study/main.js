/**
 * - Objects have properties and methods with key-value pairs 
 * - Arrays are objects 
 * - Primitive types are not objects (boolean, string, number, symbol, null, undefined)
 * - But primitives can behave like objects because javascript can wrap them in an object
 */

class User{
  // constructor function creates the new object
  constructor(name, email){
    this.name = name;
    this.email = email;
  }
  login(){
    console.log(this.email, 'is logged in');
  }
  logout(){
    console.log(this.email, 'is logged out');
  }
}

let userOne = new User('Natália', 'nfo@gmail.com');
userOne.login();

/**
 * The "new" keyword creates a new empty object {}
 * sets the value of "this" to be the new empty object 
 * and calls the constructor method
 */