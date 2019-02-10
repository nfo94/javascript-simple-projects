// O método call() invoca uma função com um dado valor this  e 
// argumentos passados individualmente.

let obj = { num: 2 };
let addToThis = function(a, b, c){
  return this.num + a + b + c;
}

// console.log(addToThis.call(obj, 3)); 

// O método apply() chama uma função com um dado valor this 
// e arguments providos como uma array (ou um objeto parecido 
// com um array).

// Apesar de a sintaxe desta função ser quase idêntica à de 
// apply(), a principal diferença é que call() aceita uma 
// lista de argumentos, enquanto apply() aceita um único array 
// de argumentos.

let array = [1, 2, 3];
console.log(addToThis.apply(obj, array));

// O método bind() cria uma nova função que, quando chamada, 
// tem sua palavra-chave this definida com o valor fornecido, 
// com uma sequência determinada de argumentos precedendo 
// quaisquer outros que sejam fornecidos quando a nova função é chamada.

var module = {
  x: 42,
  getX: function() {
    return this.x;
  }
}

var unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

var boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// expected output: 42