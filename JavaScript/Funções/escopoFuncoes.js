function myFunction(){
    function sum(){
        return 1 + 2;
    }
    return sum();
}

console.log(myFunction());


//Hoisting
function teste(){
    return sum();
    function sum(){
        return 1 + 2;
    }
}

console.log(teste());