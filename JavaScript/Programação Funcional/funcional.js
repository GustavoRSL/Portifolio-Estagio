/*

- Objetos de primeira classe
- Qualquer operação que você consegue realizar com objetos você também consegue realizar com funções.

*/

function adder(x){
    return function(y) {
        return x + y;
    };
}

var add = adder(2);
console.log(add(3));
console.log(adder(2)(3));

//////////////////////////////////////////////

var car = {
    color: 'Red'
}

function getColor(car){
    return car.color;
}

console.log(getColor(car))

//////////////////////////////////////////////

function helloWorld(){
    return 'Hello World!';
}

function showOtherFunction(func){
    return func();
}

console.log(showOtherFunction(helloWorld));