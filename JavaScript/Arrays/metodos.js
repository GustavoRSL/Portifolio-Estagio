/*

Métodos

- array.push(item) -> Adicionar items no final do array.
- array.pop() -> remover items no final do array.
- array.join() -> Juntar os elementos.
- array.reverse() -> Inverte a ordem dos array.
- array.sort() -> Ordena o array.
- array.toString() -> Converte para string. !Não modifica o array
- array.concat() -> Concatenação.           !Não modifica o array
- array.unshift() -> Adiciona um elemento no começo do array.
- array.shift() -> Remove um elemento no começo do array.
- array.slice() -> Retorna uma parte do array !Não modifica o array.
- array.splice() ->  Modifica o array principal.
- array.forEach() -> Percorre os elementos do array [item, index array].
- array.every() -> Aplica uma função a todos elementos, retornando true se todos passarem na expressão.
- array.some() -> Aplica uma função a todos elementos, retornando true se apenas um passar na expressão.
- array.map() -> Percorre o array, fazendo as alterações e salvando em outro array. Não modificar o array principal.
- array.filter() -> Percorre o array criando novo array utilizando o return da função.
- array.reduce() -> Reduzir array.
- array.reduceRight() -> Mesma coisa só que da direita para esquerda.
- array.indexOf() -> Retorna a posição do elemento caso encontre. Se não encontrar retorna -1.
- array.lastIndexOf() -> Mesma coisa, mas começa a procura do final do array. 
- Array.isArray(array) -> Retorna true ou false para verificar se é um array.

*/


var array = [1,2,3];

array[6] = 5;

console.log(array);

console.log("Método Push");
array.push(6);

console.log(array);

console.log("Método Pop");
var ultimoItem = array.pop();
console.log(ultimoItem);

array = ['Meu', 'nome', 'é', 'Gustavo']

console.log("Método Join");
console.log(array.join()); 
console.log(array.join(' ')); 

console.log("Método Reverse/Sort");
console.log(array.reverse());
console.log(array.sort());

array = [1,2,3,4];
console.log("Método toString");
console.log(array);
console.log(array.toString()); // Não modifica o array
console.log(array);

console.log("Método Concat");
console.log(array.concat(5)); // Não modifica o array
console.log(array);

console.log("Método Shift/Unshift");
array.unshift(0)
console.log(array);
array.shift();
console.log(array);

console.log("Método Slice");
console.log(array.slice(2)); // Não modifica o array
console.log(array.slice(0, 2)); // Retorna índice 0,1
console.log(array.slice(-2)); // array.length - 2 = posição a mostrar para frente 

console.log("Método Splice");
console.log(array.splice(1,2)); //Modifica o array
console.log(array);

console.log(array.splice(1,0, 'a', 'b')); //Modifica o array
console.log(array);

console.log(array.splice(1, 2, 2, 3)); //Modifica o array
console.log(array);

console.log('Item, index, array');
array.forEach((item, index, array) => {
    console.log(item, index, array);
});


console.log('Método Every/Some')
var every = array.every((item) =>{
    return item%2 == 0;
})

console.log(every);

var every = array.every((item) =>{
    return item < 10;
})

console.log(every);

var some = array.some((item) =>{
    return item%2 == 0;
})

console.log(some);

array = [1,2,3,4,5];

console.log('Método Map');
var map = array.map((item, index, array) =>{
    return item + 1;
});

console.log(map);
console.log(array);

console.log('Método Filter');
var filter = array.filter((item, index, array) =>{
    return item > 2;
})

console.log(filter);
console.log(array);

console.log('Método Reduce');
var reduce = array.reduce((acumulado, atual, index, array) => {
    console.log(acumulado);
    return acumulado + atual;
});

console.log(reduce);

console.log('Método IndexOf');
console.log(array.indexOf(3));
console.log(array.indexOf(3, 3)); // Segundo parametro especifica por qual index começar a procurar.


console.log('Método isArray');
console.log(Array.isArray(array));
