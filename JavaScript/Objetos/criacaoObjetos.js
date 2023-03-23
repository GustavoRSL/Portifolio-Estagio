/*

- Objetos são mutáveis.
- Manipulados por referência.

Criação de Objetos

- Literais
- Como construtor (new)
- Com object.create()

*/

var pessoa = {
    nome: "Gusttavo",
    idade: 22,
    altura: 180,
    sexo: "Masculino"
};

var pessoa2 = {
    nome: "Gusttavo",
    idade: 22,
    altura: 180,
    sexo: "Masculino"
};

pessoa.nome = "Gustavo";
delete pessoa.sexo;

console.log(pessoa);

//Manipulados por Referência
console.log(pessoa === pessoa2);

var copia = pessoa;
console.log(pessoa === copia);
copia.nome = "Gustavo Lima"
console.log(pessoa.nome);

// Criação
var pessoa3 = new Object();
pessoa3 = {
    nome: "Gusttavo",
    idade: 22,
    altura: 180,
    sexo: "Masculino"
}

console.log(pessoa3);

var pessoa4 = Object.create();

