/*

- Immediately-invoked function expression

- Função auto-executável

*/

function sum(){
    return 1+2;
}

console.log(sum());

var sum2 = function() {
    return 2+3;
}

console.log(sum2());

var sum3 = function otherSum(){
    return 3+4;
}

console.log(sum3());
//console.log(otherSum()); -> Erro


/* Erro

function() {
    return 1+2;
}

*/

// Função auto-executável
(function(){
    console.log(1 + 2);
}());