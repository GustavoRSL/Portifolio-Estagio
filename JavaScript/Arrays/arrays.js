var array = [1,2,3,4,5];

// Tamanho do array
console.log(array.length)

array[5] = 6;
array[7] = 8;

console.log(array)


for(var i=0; i<array.length; i++){
 console.log(array[i]);   
}

array.push(9)


console.log('Ultimo elemento ' + array[array.length-1]);