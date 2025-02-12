/* CommonJS (.js) es el sistema de módulos por defecto en Node.js, 
usa require() para importar y module.exports para exportar, permitiendo 
una ejecución síncrona y compatible con versiones antiguas de Node*/

// --> Declarando variables para usarlas de ejemplo
const a = 20;
const b = 30;

// --> Importamos el módulo filesystem (a modo de ejemplo)
const fs = require('node:fs');

// --> CommonJS
const { sumar, restar, multiplicar } = require('./index');

// --> Vamos a utilizar funciones creadas con commmon js
console.log('----------------------------------------------------');

console.log('Metodo con commonJS');

console.log(`La suma de los números ${a} y ${b} es =`, sumar(a, b));
console.log(`La suma de los números ${a} y ${b} es =`, restar(a, b));
console.log(`La suma de los números ${a} y ${b} es =`, multiplicar(a, b));

console.log('----------------------------------------------------');






