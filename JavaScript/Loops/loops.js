/*



*/

var i = 0;

console.log('While')
while ( i<10 ){
    console.log(i);
    i++;
}

console.log('For')
for(var i=0; i<10; i++){
    console.log(i);
}

i = 10;
console.log('Do While')
do {
    console.log(i);
    i--
} while (i < 10 && i > 0);

var pessoa = {
    nome: 'Gustavo',
    idade: '22',
    altura: 1.80
};

for(var prop in pessoa){
    console.log(prop);
    console.log(pessoa[prop]);
}