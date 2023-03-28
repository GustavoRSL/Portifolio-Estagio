/*

Arguments



*/

(() => {
    
    console.log('Arguments.js');

    function myFunction(){
        return arguments;
    }

    console.log(myFunction(1 , 2));

})();