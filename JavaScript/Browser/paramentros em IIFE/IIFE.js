/*

Métodos Window

- window.alert
- window.prompt
- window.confirm
- window.document

- getElementById() - Seletor por ID
- getElementsByClassName() - Seletor por classe
- getElementByTagName() - Seletor por Tag
- getElementByName() - Seletor por nome
- querySelector() - Seleção estática
- querySelectorAll() - Seleção estática


Formulários

- .value - Pegar valores de inputs
- .addEventListener() - Adicionar eventos

Sync Async

- Sync - Bloquea interações.
- JavaScript funciona apenas em uma thread
- setTimeout()
- setInterval() - Loop de intervalos
- clearTimeout()
- clearInterval()



*/


(function(win, doc) {
    'use strict';
    /* Evitar reload
    console.log(win == window);

    if(win == window)
        console.log('True');
    else
        console.log('False');

    window.alert('Hello World!'); // Objeto global, não é preciso referênciar
    alert('Olá Mundo!');
    var idade = prompt('Quantos anos você tem?')
    console.log(idade);

    var del = confirm('Deseja realmente excluir?');
    console.log(del);

    */

    console.log(doc.getElementById('meuTexto'));
    console.log(doc.getElementsByName('username'));

    var $inputs = doc.getElementsByTagName('input'); //Variável dinâmicos
    console.log($inputs);
    
    var $inputs = doc.querySelectorAll('input'); //Não mutável se adicionar outros inputs
    console.log($inputs);

    var $inputUsername = doc.querySelector('#username');
    console.log($inputUsername.value);
    console.log($inputUsername.value = 'Teste');

    var $button = doc.querySelector('#button');
    $button.addEventListener('click', () => { 
        event.preventDefault(); // Evitar de enviar o formulário.
        
        setTimeout(() =>{
            console.log('Executou setTimeout!')
        },2000);

        setInterval(() =>{
            console.log('Executou setInterval!')
        },3000);

        console.log('Formulário enviado!');
    }, false);

    var segundos = 1;
    var idTimeout;
    function relogio() {
        console.log('Tic Tac', segundos++);
        idTimeout = setTimeout(relogio, 1000);
    }
    relogio();

    var $button2 = doc.querySelector('[data-js="button"]')
    $button2.addEventListener('click', () =>{
        clearTimeout(idTimeout);
    }, false);


})(window, document);
