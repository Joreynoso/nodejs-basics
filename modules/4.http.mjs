/* HTTP Module

El módulo http en Node.js permite crear servidores web y manejar solicitudes 
HTTP de manera eficiente y asíncrona. Ofrece funciones para recibir peticiones 
y enviar respuestas, soporta diferentes métodos HTTP como GET y POST, y se 
integra fácilmente con otros módulos de Node.js. Es ideal para desarrollar 
aplicaciones web, APIs RESTful y servicios en tiempo real, siendo escalable 
y fácil de usar.

*/

import http from 'http';

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end('Hola Mundo\n');
});

server.listen(port, hostname, () => {
    console.log('servidor Corriendo');
});
