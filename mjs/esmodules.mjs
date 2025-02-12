/* ES Modules (.mjs o .js con "type": "module") es el estándar moderno, usa import y export, 
soporta ejecución asíncrona y es más compatible con navegadores, pero requiere configuración 
adicional en algunos entornos.*/

// --> Declarando variables para utilizar de ejemplo
const a = 20;
const b = 30;

// --> Importamos el módulo filesystem (a modo de ejemplo)
import fs from 'fs';

// --> Imporar funciones con ES Modules
import { sumar, restar, multiplicar } from './index.mjs'

// --> Vamos a utilizar funciones creadas con Es Modules
console.log('----------------------------------------------------');

console.log('Metodo con Es Modules');

console.log(`La suma de los números ${a} y ${b} es =`, sumar(a, b));
console.log(`La suma de los números ${a} y ${b} es =`, restar(a, b));
console.log(`La suma de los números ${a} y ${b} es =`, multiplicar(a, b));

console.log('----------------------------------------------------');

