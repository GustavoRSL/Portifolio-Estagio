/*
Objeto: Conjunto de propriedades.

*/

var pessoa = {
    nome: 'Gustavo',
    idade: 23
};

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.idade);

var myFunction = function () {return 'Hello World!'};

console.log(myFunction);
console.log(myFunction());

pessoa.altura = 1.80;

console.log(pessoa);

pessoa.andar = () => {
    return 'Comecei a andar!';
}

console.log(pessoa);

console.log(pessoa.andar());
