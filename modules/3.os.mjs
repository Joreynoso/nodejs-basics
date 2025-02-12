/*El módulo OS

en Node.js proporciona información del sistema operativo, 
como el tipo de SO, arquitectura, memoria disponible, CPU y directorios 
importantes. Se usa para optimizar aplicaciones según el entorno, 
gestionar recursos y monitorear el rendimiento. Sus ventajas incluyen 
acceso rápido a datos del sistema, compatibilidad multiplataforma y 
facilidad de integración en scripts automatizados o herramientas de 
monitoreo.

*/

// --> importar OS 
import os from 'os';

// --> Crear una función para poder pasar de bytes a gb
const convertidor = (memoriaEnBytes) => {

    return (memoriaEnBytes / (1024 **3)).toFixed(2) + 'GB'; //--> transformar de bytes a gigabytes, limitar caracteres a 2

}

console.log('Sistema Operativo:', os.platform());
console.log('Versión del SO:', os.version());
console.log('Memoria Total:', convertidor(os.totalmem()));
console.log('Memoria Total:', convertidor(os.freemem()));


