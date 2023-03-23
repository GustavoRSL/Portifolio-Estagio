/*

- Métodos dos Objetos

- Key -> Object.keys(obj) retorna um array
- isPrototypeOf(obj)
- JSON.stringfy(obj) OBJ -> JSON
- JSON.parse(JSON) JSON -> OBJ


*/

var obj = {
    x: 1,
    y: 2
};

console.log(Object.keys(obj));
console.log(Object.keys(obj).length);

var obj2 = Object.create(obj);
var obj3 = Object.create(obj2);

console.log(obj.isPrototypeOf(obj2)); // Pai -> Filho
console.log(obj.isPrototypeOf(obj3)); // Pai -> Filho


var virouJSON = JSON.stringify(obj); // OBJ -> JSON
console.log(virouJSON);

console.log(JSON.parse(virouJSON)); // JSON -> OBJ


