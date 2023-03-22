function retornaArray() {
    return [1,2,3];
}

console.log(retornaArray());

console.log(retornaArray()[0]);

console.log(retornaArray()[3]);

function retornaObject(){
    return {
        nome: "Gustavo",
        idade: 22,
        altura: 1.85
    }
}

console.log(retornaObject());
console.log(retornaObject().nome);
console.log(retornaObject().idade);