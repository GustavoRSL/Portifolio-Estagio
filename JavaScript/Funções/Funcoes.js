/*
Funções: Blocos de códigos JavaScript nomeados, e que podem ser invocados usando operador ().

Métodos 

- name -> Retorna nome da função.
- length -> Retorna quantidade de parâmentros.
- toString() -> Imprime a função em formato de string.
- call(this, args) -> Invocar a função.
- apply(this, [args]) -> Invocar função com array
- prototype()


*/

function HelloWorld (num){
    console.log("Hello World!");
    return num;
}

var num = HelloWorld(5);
console.log(num);

console.log(HelloWorld.name);
console.log(HelloWorld.length);
console.log(HelloWorld.toString());
console.log(HelloWorld.call(this, 5));
console.log(HelloWorld.call(null, 5)); // Caso não precisa passar o This
console.log(HelloWorld.call(HelloWorld, 5)); // Caso não precisa passar o This

var array = [1,2,3]

console.log(HelloWorld.apply(HelloWorld, array)); // Caso não precisa passar o This


function MyName(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

MyName.prototype.fullName = function() {
    return this.nome + ' ' + this.sobrenome;
}

var pessoa = new MyName('Gustavo', 'Lima');

MyName.prototype.age = 22;

console.log(pessoa.fullName())
console.log(pessoa.age)