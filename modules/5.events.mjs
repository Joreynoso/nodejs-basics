/* EventMitter

El módulo EventEmitter en Node.js permite gestionar eventos y sus manejadores,
facilitando la implementación de un sistema basado en eventos en aplicaciones. 
Es comúnmente utilizado para crear aplicaciones donde diferentes componentes 
necesitan comunicarse entre sí sin estar directamente conectados, como en 
servidores web o aplicaciones en tiempo real. Entre sus ventajas se incluyen 
la capacidad de emitir y escuchar eventos asíncronos, lo que permite una 
programación no bloqueante y eficiente, ideal para manejar múltiples eventos 
simultáneamente sin afectar el rendimiento.

*/

// --> import eventmitter
import { EventEmitter } from "events";

const emitter = new EventEmitter();

emitter.on('Mensaje', (data) => {
    console.log('Mensaje Recibido', data);
});

emitter.emit('Mensaje', 'Hola Node.js!');

// -------------------------------------------

const pedidoPizza = new EventEmitter();

// --> Ejemplo práctico para entenderlo un poco mejor
pedidoPizza.on('pedido-pizza', (tipoPizza) => {
    console.log(`Preparando una pizza ${tipoPizza}`);
});

// EventMitter puede registrar multiples listeners para un mismo evento
pedidoPizza.on('pedido-pizza', (tipoPizza) => {
    if (tipoPizza === 'Margarita') {
        console.log('La pizza margarita lleva una coca-cola de 500ml de regalo');
    }
})

// Emitir el evento 'pedidoPizza'
pedidoPizza.emit('pedido-pizza', 'Margarita'); // -->

