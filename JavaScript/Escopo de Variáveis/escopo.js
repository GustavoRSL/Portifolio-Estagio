/*
Escopo de variáveis:

- Global
- Local

- Function criar escopo local.
- Garbage collector
- Se criar uma variável sem a palavar reservada VAR irá criar no escopo global.

*/

function helloWorld() {
    msg = "Hello World!";
    return msg;
}

helloWorld();
console.log(msg);