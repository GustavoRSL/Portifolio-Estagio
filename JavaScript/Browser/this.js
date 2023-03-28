/*

This 

- Faz referência ao objeto principal.
- This aparece também em funções e possui dois valores. 
- Quando This não esta vinculado a um objeto ele aponta para o objeto Global Window.
- Outro valor é quando faz referência ao objeto instânciado. 

*/

(() => {

    console.log('This.js');

    var objeto = {
        prop: 1,
        init:  function init(){
            return this;
        }
    }

    console.log(objeto.init());

    function myFunction(){
        return this;
    }

    console.log(myFunction());

    // Letra inicial Maiúscula para contrutores. 
    function MyConstructor() {
        this.prop1 = 'prop1';
        this.prop2 = 'prop2';
    }

    console.log('Construtor', new MyConstructor());
})();