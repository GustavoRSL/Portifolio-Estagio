/*

Expressões regulares

- Manipular Strings
- Tipo Primitivo
- Case Sensitive - Se não houver flag para ignorar
- Objeto RegExp()


Flags

- g: global
- i: ignore case
- m: Multiline

Termos

- \w: Caracteres alfanuméricos.
- \W: W Maiúsculo, qualquer caractere, menos os alfanuméricos.
- \d: Caracteres númericos.
- \D: D Maiúsculo, qualquer caractere, menos os númericos.
- | OU
- [Lista] - Um dos caracteres que estiverem dentro.
- () Agrupamento de caracteres - Grupo ou captura.
- [A-Za-z0-9].
- \s Espaço em branco.
- \S Todos menos espaço em branco.
- \n Quebra de linha.
- . Qualquer caracter que não seja quebra de linha.
- Repetidores -> Intervalor {n, m} n mínimo | m máximo {n,} No mínimo. {n} Número exato
- Negação [^] -> Precisa estar dentro da lista para ser negação.
- ? Opcional - representa zero ou uma ocorrência do item anterior.
- + Uma ou mais ocorrência do item anterior.
- * zero ou mais ocorrência do item anterior.
- ^ Inicio de string
- $ Fim de string
- (?:) Somente agrupamento sem capturar
- /1, /2 refência

Métodos

- match()
- replace()
- split()
- search()
- RegExp()
- test()
- exec() -> A cada execução ele busca o próximo match

*/

var regex = /m/;

var text = 'Lorem Ipsum is simply dummy text of the printing and typessetting indusstry. Lorem Ipsum has been the industry 1985. de da 1987 do 1'

console.log(text.match(regex));

regex = /m/g;

console.log(text.match(regex));

regex = /\w/g;
console.log(text.match(regex));

regex = /\d/g;
console.log(text.match(regex));

regex = /\d\d/g;
console.log(text.match(regex));

regex = /da|de/g;
console.log(text.match(regex));

regex = /[1985]/g;
console.log(text.match(regex));

regex = /(1985)|(1987)/g;
console.log(text.match(regex));

regex = /1985/g;
console.log(text.replace(regex, '1897')); //Não modifica o texto original
console.log(text);

console.log(text.replace(regex, function(){
    console.log('Arguments', arguments);
}));

regex = /\s/g;
console.log(text.match(regex).length); //Qtd de espaços em branco

regex = /\n/g;
console.log(text.match(regex));

regex = /[^\d]/g;
console.log(text.match(regex));

regex = /\W/g;
console.log(text.match(regex));

regex = /\w{2,3}/g;
console.log(text.match(regex));

regex = /\w{5,}/g;
console.log(text.match(regex));

regex = /\w{4}/g;
console.log(text.match(regex));

regex = /\d\d?/g;
console.log(text.match(regex));

regex = /s\w+/g;
console.log(text.match(regex));

text = 'https://www.google.com.br'
regex = /https:\/\/\w+.\w+.\w+.br/
console.log(text.match(regex));

text = '123.456.789-00'
regex = /\d{3}.\d{3}.\d{3}-\d{2}/
console.log(text.match(regex));

text = 'https://www.google.com.br'
regex = /^https:\/\/\w+.\w+.(?:com|org).br$/
console.log(text.match(regex));

text = '123.456.789-00'
regex = /\D/;
console.log(text.split(regex));

regex = /\./;
console.log(text.search(regex)); //Encontra o primeiro elemento do regex

text = 'Gustavo';
var regex = new RegExp('tavo');
console.log(text.match(regex));

var regex = new RegExp('\\d');
console.log(regex.test('Gustavo'));

console.log(regex.exec('Gustavo'));
