/*

Falsy

- Undefined 
- Null
- NaN
- 0
- -0
- ' oU "
- false


- Restante é true
- !! verificar

*/


if(undefined || null || NaN || 0 || -0 || '' || "" || false){
    console.log("True");
}
else {
    console.log("False");
}

console.log(!!undefined);
console.log(!!null);
console.log(!!NaN);
console.log(!!0);
console.log(!!'');