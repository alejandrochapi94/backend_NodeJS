# Utilizar módulos CommonJS VS ES Módules

1. require (CommonJS)

Orígenes: require es la forma tradicional de manejar módulos en Node.js, basada en el sistema CommonJS.

Funcionamiento: require es una función que se utiliza para sincronizar la carga de un módulo. Esto quiere decir que el código se detiene hasta que el módulo requerido se haya cargado completamente.

Sintaxis:

```js
const modulo = require('./ruta/al/modulo'); 

```

```js
// Archivo: matematicas.js
function suma(a, b) {
  return a + b;
}

module.exports = suma; 

// Archivo: principal.js
const sumar = require('./matematicas');
console.log(sumar(2, 3)); // Salida: 5
```
En CommonJS, module.exports es la única forma de exponer elementos de un módulo para que puedan ser utilizados por otros archivos.

Piensa en module.exports como una caja donde colocas todo lo que quieres "exportar" o "hacer público" desde tu módulo.

Es importante recordar:

module es un objeto global proporcionado por Node.js dentro de cada archivo JavaScript. Contiene información sobre el módulo actual.

exports es una propiedad del objeto module.

Puedes asignar un valor directamente a module.exports (como una función) o usarlo como un objeto para exportar múltiples elementos.

Entonces siempre debes usar module.exports para que las funciones, variables u objetos de tu módulo estén disponibles para otros archivos al trabajar con CommonJS en Node.js.


2. import / export (ES Modules)

Orígenes: import y export son la forma estándar de manejar módulos en JavaScript, definida en la especificación ECMAScript Modules (ESM).

Funcionamiento: import y export permiten la carga de módulos de forma asíncrona. Esto significa que el código puede continuar ejecutándose mientras los módulos se cargan en segundo plano, mejorando el rendimiento.

Sintaxis:

Exportar:

```js
// Exportar una función por defecto
export default function suma(a, b) {
  return a + b;
}

// Exportar múltiples elementos
export const PI = 3.14159;
export function resta(a, b) { 
  return a - b;
} 
```
Importar:

```js
// Importar la función por defecto
import suma from './matematicas';

// Importar elementos específicos
import { PI, resta } from './matematicas'; 
```

# Trabajando con CommonJS

### Ejemplos

1. Creamos un archivo module.js:

```js
// 1. Variable
const nombre = 'ChatBot Asistente';

// 2. Función
function saludar(nombre) {
  console.log(`¡Hola, ${nombre}!`);
}

// 3. Clase
class Calculadora {
  constructor(valorInicial = 0) {
    this.valor = valorInicial;
  }

  sumar(num) {
    this.valor += num;
    return this;
  }

  restar(num) {
    this.valor -= num;
    return this;
  }
}

// 4. Diccionario (Objeto)
const configuracion = {
  tema: 'oscuro',
  idioma: 'es',
  notificaciones: true,
};

// Exportación
module.exports = {
  nombre,
  saludar,
  Calculadora, // Nombre de la clase
  configuracion,
};
```

2. Creamos un archivo main.js

```js
// Importamos TODO el módulo
const modulo = require('./modulo');

// 1. Acceder a la variable
console.log(modulo.nombre); // Salida: ChatBot Asistente

// 2. Llamar a la función
modulo.saludar('Juan'); // Salida: ¡Hola, Juan!

// 3. Instanciar y usar la clase
const miCalculadora = new modulo.Calculadora(5);
miCalculadora.sumar(3).restar(2); 
console.log(miCalculadora.valor); // Salida: 6

// 4. Acceder a las propiedades del diccionario
console.log(modulo.configuracion.tema); // Salida: oscuro
console.log(modulo.configuracion.idioma); // Salida: es
```

### Dato adicional

 Exportación individual (menos común):

Puedes asignar directamente una propiedad a module.exports para cada elemento que desees exportar:

```js
// modulo.js
module.exports.nombre = 'ChatBot Asistente'; 

function saludar() { /* ... */ }
module.exports.saludar = saludar; 

// ... otras exportaciones individuales
```

Exportar la función principal directamente (poco flexible):

Si tu módulo solo tiene una función principal que deseas exportar, puedes asignarla directamente a module.exports:

```js
// modulo.js
function saludar(nombre) {
  console.log(`¡Hola, ${nombre}!`);
}

module.exports = saludar;
```

