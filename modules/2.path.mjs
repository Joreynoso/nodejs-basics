/* PATH

--> Características: Manipula rutas de archivos y directorios (unir, resolver, extraer partes).
--> Puntos fuertes: Compatible entre diferentes sistemas operativos (Windows, Linux, macOS), maneja las 
diferencias en las rutas de forma transparente.
--> Desventaja: No proporciona funcionalidades más avanzadas como la manipulación directa de archivos.

*/

// --> Importar modulo path
import path from 'path';

// --> Necesario, ya que __dirname es exclusivo de commonJS
import { fileURLToPath } from 'url';

// --> Obtiene la ruta completa del archivo actual en formato URL
const __filename = fileURLToPath(import.meta.url);

// --> Extrae solo el directorio donde está el archivo
const __dirname = path.dirname(__filename);

console.log(path.join(__dirname, 'folder', 'file.text'));
