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