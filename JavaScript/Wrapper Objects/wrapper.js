/*

- Valores primitivos não são objetos
- Construtores - Criam novos objetos
*/


var nome = "Gustavo";

var name = new String('Gustavo');
var age = new Number(22);
var falso = new Boolean(false);

console.log(nome.length);
console.log(name);
console.log(age);
console.log(falso);

console.log(name.valueOf());
console.log(age.valueOf());
console.log(falso.valueOf());

// Conversores e Typeof

var idade = String(22);
console.log(typeof idade);

// Objeto
console.log(typeof null);