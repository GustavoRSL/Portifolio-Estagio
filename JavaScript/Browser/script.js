console.log("Script.js")

var nome = "Gustavo"; // Variável global!
var teste = 'Global';

(function() {
    teste = 'Local'; // Local
    var nome2 = "Gustavo Reis";
    console.log(teste);
})();

console.log(teste); // Local