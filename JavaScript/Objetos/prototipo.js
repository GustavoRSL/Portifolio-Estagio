/*

- object.prototype
- Encadeiamento de protótipos
- Herança (object.create(obj))


*/

var obj = {
    x: 1,
    y: 2
}

var obj2 = Object.create(obj);

console.log(obj2);
console.log(obj2.x);
console.log(obj2.y);

obj.x = 2;
console.log(obj2.x);

obj2.x = '3'
console.log(obj.x) // Não muda valor do pai

console.log(obj2);
for(var prop in obj2){
    console.log(prop); // Lista todas propriedades herdadas
}

console.log(obj2.hasOwnProperty('y')); // Só mostra propriedades não herdadas.

for(var prop in obj2){
    if(obj2.hasOwnProperty(prop)){ // Lista todas propriedades não herdadas
        console.log(prop); 
    }
}