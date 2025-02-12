/* FS (File System):

--> Características: Permite leer, escribir, eliminar y manipular archivos y directorios.
--> Puntos fuertes: Soporta operaciones sincrónicas y asincrónicas, lo que mejora el rendimiento 
en operaciones de E/S de archivos. Ideal para manejar archivos locales.
--> Desventaja: Las operaciones sincrónicas pueden bloquear el hilo principal, afectando el 
rendimiento en aplicaciones grandes.

*/

// --> Importar fileSystem 
import fs from 'fs';

// --> Primer parametro: El nombre del archivo (ruta) donde se va a escribir.
// --> Segundo parametro: Los datos que deseas escribir en ese archivo.
fs.writeFileSync('example.txt', 'Hola, Node JS!, este contenido está dentro de example.txt');
console.log(fs.readFileSync('example.txt', 'utf8'));




