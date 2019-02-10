//  WHAT IS AN ARROW FUNCTION

// is a syntax sugar for declaring functions
// they do not have thier own this and are not suitable for declaring methods in objects

// ex:
var materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

// quantas letras tem cada nome de material?
console.log(materials.map(material => material.length)); // output: Array [8, 6, 7, 9]