/*

Objeto String

- object.length -> Retorna tamanho da string.
- object.charAt(index) -> Qual caracter na posição X.
- object.concat(arg1, arg2 ...) -> Concatena strings. Não modifica string principal!!!
- object.indexOf(string, [start]) -> Verificar se existe um caracter.
- object.lastIndexOf(string, [start]) -> Verificar se existe um caracter, só que verifica da direita para esquerda.
- object.replace(string, newString) -> Faz a troca de caracteres, somente  do primeiro que achar. Não modifica string principal!!!
- object.slice(start, [end]) -> Indice inicial e final
- object.split() -> Quebra string
- object.substring(start, end) -> Mesma coisa que slice, faz inversão se número da esquerda for maior que da direita.
- object.toLowerCase() -> Faz a string ficar em caracteres minúsculos.
- object.toUpperCase() -> Faz a string ficar em caracteres maiúsculos.

*/

var nome = new String('Gustavo');

console.log('Object.length');
console.log(nome.length);

console.log('Object.charAt');
console.log(nome.charAt(3));

console.log('Object.concat');
console.log(nome.concat(' Reis', ' Souza', ' Lima'));

console.log('Object.indexOf');
console.log(nome.indexOf('tavo'));

console.log('Object.replace');
console.log(nome.replace('o', 'a'));

console.log('Object.slice');
console.log(nome.slice(3, 5));

console.log('Object.split');
console.log(nome.split('t'));

var arrayNome = ['Gus', 'avo']
console.log('Object.join');
console.log(arrayNome.join('t'));

console.log('Object.substring');
console.log(nome.substring(5, 3));

console.log('Object.toLowerCase');
console.log(nome.toLowerCase());

console.log('Object.toUpperCase');
console.log(nome.toUpperCase());