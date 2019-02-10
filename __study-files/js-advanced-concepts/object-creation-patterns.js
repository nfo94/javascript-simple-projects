// Factory 

// Obs: functions are also objects in js

const peopleFactory = function(name, age, state){
  let temp = {};

  temp.age = age;
  temp.name = name;
  temp.state = state;

  temp.printPerson = function(){
    console.log(`${this.name} | ${this.age} | ${this.state}`);
  }

  return temp;
}

let personOne = peopleFactory('nat', 24, 'BA');
personOne.printPerson();

// Constructor

let peopleConstructor = function(rg, cpf){
  this.rg = rg;
  this.cpf = cpf;
  this.printData = function(){
    console.log(`${this.rg} | ${this.cpf}`);
  }  
}

let personTwo = new peopleConstructor(1323361545, 0556365755);
personTwo.printData();

// Prototype

let peopleProto = function(){}

peopleProto.prototype.dateBirth = 0;
peopleProto.prototype.civilStatus = 'not defined';
peopleProto.prototype.printProtoPerson = function(){
  console.log(`${this.dateBirth} | ${this.civilStatus}`);
}

let personThree = new peopleProto();

personThree.dateBirth = '24/11/1994';
personThree.civilStatus = 'Single';
personThree.printProtoPerson();