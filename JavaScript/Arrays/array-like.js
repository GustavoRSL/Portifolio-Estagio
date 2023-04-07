/*

Array-like -> Funciona como array mas não é!

Array Prototype



*/



function myFunction() {
    var array = [1,2,3];
    array.forEach(function () {
        console.log(this);
    }, array);


    Array.prototype.forEach.call(arguments, function(item){
        console.log(item);
    })
}

myFunction(1,2,3,'a','b','c');