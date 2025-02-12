/* HTTP Module

El módulo http en Node.js permite crear servidores web y manejar solicitudes 
HTTP de manera eficiente y asíncrona. Ofrece funciones para recibir peticiones 
y enviar respuestas, soporta diferentes métodos HTTP como GET y POST, y se 
integra fácilmente con otros módulos de Node.js. Es ideal para desarrollar 
aplicaciones web, APIs RESTful y servicios en tiempo real, siendo escalable 
y fácil de usar.

*/

// --> Importar http
import http from 'http';

// --> Creando servidor
const server = http.createServer((req, res) => {

    res.writeHead(200, 'content-type', 'text/plain');
    res.end('Hola Mundo Node.js');

});

server.listen(3000, () => {
    
    console.log('Servidor en http://localhost:3000');

})