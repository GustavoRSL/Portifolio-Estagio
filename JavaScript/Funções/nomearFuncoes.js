/*

- Sempre nomear funções ao invés de declarar anônima.
- Facilita o debug, por conseguir obter o nome.

*/

var func = function() {
    return 'Hello World!';
}

console.log(func());
console.log(func.name); // Nome da variavel

var func = function hello() {
    return 'Hello World!';
}
 
console.log(func());
console.log(func.name); // Nome da função.