/*Node.js es un entorno de ejecución de JavaScript, construido sobre el motor 
V8 de Google Chrome. Permite ejecutar código JavaScript fuera del navegador, haciendo posible 
el desarrollo de servidores, APIs, aplicaciones en tiempo real y mucho más. */

// --> Crearemos 3 funciones simples para usar de ejemplo
const sumar = (a, b) => {
    return a + b;
};

const restar = (a, b) => {
    return a - b;
};

const multiplicar = (a, b) => {
    return a * b;
};

// --> Commonjs 
const fs = require('node:fs'); // Importar FileSystem, un módulo de nodejs conocido y usado.

// --> Exportar nuestras funciones para utilizarlas con commonJS
module.exports = {
    sumar,
    restar,
    multiplicar
}



