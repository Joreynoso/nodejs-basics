/* Node.js es un entorno de ejecución de JavaScript, construido sobre el motor 
V8 de Google Chrome. Permite ejecutar código JavaScript fuera del navegador, 
haciendo posible  el desarrollo de servidores, APIs, aplicaciones en tiempo real 
y mucho más. */

// --> Crearemos 3 funciones simples para usar de ejemplo
// --> En Es Modules, se exporta anteponiendo la palabra export antes de la función
export const sumar = (a, b) => {
    return a + b;
};

export const restar = (a, b) => {
    return a - b;
};

export const multiplicar = (a, b) => {
    return a * b;
};

// --> Importar con ES modules (solo a modo de ejemplo)
import fs from 'fs';


