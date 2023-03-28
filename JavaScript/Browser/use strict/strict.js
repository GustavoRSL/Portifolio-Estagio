/*

- Não permite a criação de variáveis sem o Var
- Não permite o uso do With

*/


(() =>{
    //'use strict';
    nome = "Gustavo"
    console.log(nome);

    var objeto = {
        prop1: {
            prop2: {
                prop3: {
                    prop31: 'prop31',
                    prop32: 'prop32',
                    prop33: 'prop33',
                }
            }
        }
    }

    console.log(objeto.prop1.prop2.prop3);

    with(objeto.prop1.prop2.prop3) {
        console.log(prop31, prop32, prop33);
    }

    function Person(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    console.log(Person());

    var myVar = 2;

    var objeto = {
        prop1: 1,
        prop2: 2,
        prop3: 3
    };

    // Delete apenas deleta propriedades de objetos.
    console.log(delete myVar, delete objeto.prop1);
})();