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
    this.score = 0;
  }
  login(){
    console.log(this.email, 'is logged in');
    return this;
  }
  logout(){
    console.log(this.email, 'is logged out');
    return this;
  }
  updateScore(){
    this.score++;
    console.log(this.email, 'score is now', this.score);
    return this; //method chaining
  }
}

class Admin extends User{ // inheritance
  deleteUser(user){
    users = users.filter(u =>{
      return u.email != user.email;
    })
  }
}

let userTwo = new User('Marcelo', 'mfo@gmail.com');
let userOne = new User('Natália', 'nfo@gmail.com');
let adminOne = new Admin('Magaly', 'mmfo@gmail.com');
let users = [userOne, userTwo, adminOne];
adminOne.deleteUser(userTwo);
console.log(users);

// userOne.login().logout(); //method chaining

/**
 * The "new" keyword creates a new empty object {}
 * sets the value of "this" to be the new empty object 
 * and calls the constructor method
 */