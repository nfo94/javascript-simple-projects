/*
  *Literal
  
const book1 = {
  title: 'Book One',
  author: 'John Doe',
  year: 2018,
  getSummary: function(){
    return `${this.title} was written by ${this.author}`
  }
};

console.log(book1.getSummary());
console.log(Object.values(book1));*/

//Book constructor
// function Book(title, author, year){
//   this.title = title;
//   this.author = author;
//   this.year = year;
// }

//getSummary stored in the __proto__
// Book.prototype.getSummary = function(){
  // return `${this.title} was written by ${this.author}`;
// }

//instantiating and Object
// const bookOne = new Book('Book One', 'Jane Doe', '2017');
// console.log(bookOne.getSummary());

//Maganize constructor
// function Magazine(title, author, year, month){
  // Book.call(this, title, author, year);
  // this.month = month;
// }
//inherit Prototype
// Magazine.prototype = Object.create(Book.prototype);
//instantiating Magazine Object
// const mag1 = new Magazine('Mag One', 'John Doe', '2018', 'January');
// console.log(mag1);

//Object.create
// const bookProtos = {
  // getSummary: function(){
    // return `${this.title} was written by ${this.author}`;
  // },
  // getAge: function(){
    // const years = new Date().getFullYear() - this.year;
    // return `${this.title} is ${years} old`;
  // }
// }
//create object
// const book1 = Object.create(bookProtos, {
//   title: {value: 'Book One'},
//   year: {value: '1965'},
//   author: {value: 'John Doe'},
// });

//classes
class Book{
  constructor(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getSummary(){
    
  }
}

//instantiate Object
const book1 = new Book('Book One', 'John Doe', '2013');
console.log(book1);