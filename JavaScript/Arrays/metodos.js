/*

Métodos

- array.push(item) -> Adicionar items no final do array
- array.pop() -> remover items no final do array
- array.join() -> Juntar os elementos
- array.reverse() -> Inverte a ordem dos array
- array.sort() -> Ordena o array



*/


var array = [1,2,3];

array[6] = 5;

console.log(array);

array.push(6);

console.log(array);

var ultimoItem = array.pop();
console.log(ultimoItem);

array = ['Meu', 'nome', 'é', 'Gustavo']

console.log(array.join()); 
console.log(array.join(' ')); 

console.log(array.reverse());
console.log(array.sort());