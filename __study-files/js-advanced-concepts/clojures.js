// "Closures are nothing but FUNCTIONS WITH PRESERVED DATA

let passed = passed;

let addTo = function () {
  let inner = 2;
  return passed + inner;
}

console.log(addTo(3));