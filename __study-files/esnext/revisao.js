// let e var
// {
//   var a = 1;
//   let b = 2;
// }

// console.log(a);
// console.log(b);

// template string

// let product = 'iPad';
// console.log(`${product}`);

// destructuring

// const [x, y] = [4, 5];
// console.log(x, y);

// const { name, age } = { name: 'Nat', age: 24 };
// console.log(name, age);

// const sum = (a, b) => a + b;
// console.log(sum(2, 3));

// arrow - this is associated with the local it was written

// default parameter 

// rest - aggregate
// function total(...numbers){
//   let total = 0;
//   numbers.forEach(num => total += num);
//   return total;
// }

// console.log(total(2, 4, 2, 2));

// Object.values / Object.entries

// const obj = { a: 1, b: 2, c:3 };
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// const name = 'Nat';
// const person = {
//   name,
//   hi(){
//     return 'Hi guys!';
//   }
// }
// console.log(person.name, person.hi());  

// class Animal {};
// class Dog extends Animal{
//   bark(){
//     return 'Wof wof!';
//   }
// }
// let dog1 = new Dog;
// console.log(dog1.bark());

// const employee = { name: 'Nat', salary: 12000 };
// const clone = { isActive: true, ...employee };
// console.log(clone.name);

// tagged templates

// function dollar(parts, ...values) {
//   const result = [];
//   values.forEach((value, index) => {
//     value = isNaN(value) ? value : `${value.toFixed(2)}`;
//     result.push(parts[index], value);
//   });
//   return result.join('');
// }

// const price = 29.99;
// const pricePortion = 11;
// console.log(dollar `1x de ${price} ou 3x de ${pricePortion}.`)

// Map object

// const techs = new Map();
// techs.set('react', { framework: false });
// techs.set('angular', { framework: true });
// console.log(techs.get('react'));

// Set object - it doesn`t accept repetition 

// const teams = new Set();
// teams.add('Vasco');
// teams.add('Corinthians');
// teams.add('Bahia');
// teams.add('Vasco');
// console.log(teams);