function User(email, name){
  this.email = email;
  this.name = name;
  this.online = false;
}

// without ES6 syntax sugar
User.prototype.login = function(){
  this.online = true;
  console.log(this.email, 'has logged in');
}

let userOne = new User('nfo@gmail.com', 'Natália');
console.log(userOne);
let adminOne = new Admin('mfo@gmail.com', 'Marcelo');
console.log(adminOne);

function Admin(...args){
  User.apply(this, args)
  /*
  *O método apply() chama uma função com um dado valor 
  *this e arguments providos como uma array (ou um 
  *objeto parecido com um array).
  */
 this.role = 'admin'; // a property tha only admin has
}

Admin.prototype = Object.create(User.prototype);
