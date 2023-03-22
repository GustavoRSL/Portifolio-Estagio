/*
    Hoisting é um comportamento de JavaScript em que as declarações de 
    variavéis e funções são movidas para o topo do escopo em que foram declaradas, 
    antes da execução real do código.
*/

//Hoisting -> Antes de aplicar Hoisting
function teste(){
    var valor1 = 1;
    var valor2 = 2;
    return sum();
    function sum(){
        return valor1 + valor2;
    }
}

console.log(teste());

//Hoisting -> Depois de aplicar Hoisting
function teste2(){
    function sum(){
        return valor1 + valor2;
    }
    var valor1 = 1;
    var valor2 = 2;
    return sum();
}

console.log(teste2());

console.log('Exemplo hoisting variavel');

//Hoisting Variável
function teste3(){
    console.log(numero);
    var numero = 2;
    console.log(numero);
    return 0;
}

console.log(teste3());

// Aplicando Hoisting
function teste4(){
    var numero;
    console.log(numero);
    numero = 2;
    console.log(numero);
    return 0;
}

console.log(teste4());
