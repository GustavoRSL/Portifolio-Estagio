/*

- Return
- Break
- Continue

*/


function myFunction(num) {
    if(num == 10){
        return true
    }
    return false;
}

console.log(myFunction(10));
console.log(myFunction(5));

var num = 10;

switch(num){
    case 10:
        console.log('True');
        break;
    case 5:
        console.log('False');
        break;
    default:
        console.log('Default');
}

for(var i=0; i<10; i++){
    if(i === 4){
        continue; // Pula a iteração 4
    }
    console.log(i);
}