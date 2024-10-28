# Clase repaso de la importación y la exportación en JavaScript


### **Introducción a la Importación y Exportación en JavaScript**

JavaScript permite dividir el código en módulos para organizar mejor el desarrollo de aplicaciones. Con módulos, puedes **importar** y **exportar** funciones, objetos, variables y clases entre diferentes archivos, lo que facilita el mantenimiento y la reutilización de código.

Existen dos formas principales de manejar módulos en JavaScript:

1. **CommonJS**: La convención usada en Node.js. Usa `require` para importar y `module.exports` o `exports` para exportar.
2. **ES6 Modules (ECMAScript 2015)**: La convención moderna que usa `import` y `export`, y es ampliamente utilizada tanto en el frontend como en Node.js.

Aquí vamos a enfocarnos en **ES6 Modules**.

### **Configuración Básica de un Proyecto con ES6 Modules**

Antes de comenzar, asegúrate de que tu proyecto esté configurado correctamente:

1. Crea una carpeta para tu proyecto y navega dentro de ella:
   ```bash
   mkdir proyecto-modulos
   cd proyecto-modulos
   ```

2. Inicializa el proyecto con `npm init -y` para generar el archivo `package.json`.

3. En `package.json`, agrega `"type": "module"` para habilitar el uso de ES6 modules:
   ```json
   {
     "name": "proyecto-modulos",
     "version": "1.0.0",
     "main": "index.js",
     "type": "module",
     ...
   }
   ```

---

### **Exportación en JavaScript**

En ES6, hay dos formas principales de exportar:

1. **Exportación Nombrada (`export`)**
2. **Exportación por Defecto (`export default`)**

#### 1. Exportación Nombrada

Permite exportar varias funciones, objetos o variables del mismo archivo. Se usa `export` delante de cada elemento.

Ejemplo:

**archivo: `mathUtils.js`**
```javascript
// Exportación nombrada de funciones
export function sumar(a, b) {
  return a + b;
}

export function restar(a, b) {
  return a - b;
}

export const PI = 3.1416;
```

Aquí estamos exportando tres elementos: las funciones `sumar` y `restar` y la constante `PI`.

#### 2. Exportación por Defecto

Cada módulo solo puede tener una exportación por defecto. No se usa el nombre al exportar, y al importar puedes elegir el nombre que prefieras.

Ejemplo:

**archivo: `saludos.js`**
```javascript
export default function saludar(nombre) {
  return `Hola, ${nombre}!`;
}
```

Aquí exportamos la función `saludar` como exportación por defecto.

---

### **Importación en JavaScript**

Para importar los módulos, usa `import`. 

#### 1. Importación de Exportaciones Nombradas

Para importar una exportación nombrada, usa `{}` con el nombre exacto del elemento exportado:

**archivo: `app.js`**
```javascript
import { sumar, restar, PI } from './mathUtils.js';

console.log(sumar(5, 3)); // 8
console.log(restar(5, 3)); // 2
console.log(PI); // 3.1416
```

#### 2. Importación de Exportación por Defecto

Para importar la exportación por defecto, simplemente usa el nombre que prefieras (sin `{}`).

**archivo: `app.js`**
```javascript
import saludar from './saludos.js';

console.log(saludar("Juan")); // Hola, Juan!
```

#### 3. Importación de Exportaciones Mixtas

Si el archivo exporta tanto una exportación por defecto como nombradas, puedes combinarlas en la importación.

**archivo: `mix.js`**
```javascript
export default function multiplicar(a, b) {
  return a * b;
}

export const nombre = "Calculadora";
```

**archivo: `app.js`**
```javascript
import multiplicar, { nombre } from './mix.js';

console.log(multiplicar(4, 5)); // 20
console.log(nombre); // Calculadora
```

---

### **Ejercicios para Practicar Importación y Exportación**

#### **Ejercicio 1**: Operaciones Matemáticas

1. Crea un archivo llamado `operaciones.js`.
2. Dentro de `operaciones.js`, exporta las siguientes funciones de manera nombrada:
   - `suma`: retorna la suma de dos números.
   - `resta`: retorna la resta de dos números.
   - `multiplicacion`: retorna la multiplicación de dos números.
3. Crea un archivo `app.js` que importe estas funciones y ejecute al menos una de cada una con valores de ejemplo.

---

#### **Ejercicio 2**: Exportación por Defecto con Información Personal

1. Crea un archivo llamado `persona.js`.
2. Dentro de `persona.js`, exporta un objeto por defecto que contenga la siguiente información:
   - `nombre`: un string con un nombre.
   - `edad`: un número con una edad.
   - `profesion`: un string con la profesión.
3. Importa este objeto en `app.js` y muestra cada propiedad en la consola.

---

#### **Ejercicio 3**: Importación Mixta

1. Crea un archivo `calculadora.js` y define una función `dividir` como exportación por defecto, la cual retorne la división de dos números.
2. Exporta adicionalmente una constante `descripcion` que sea una breve descripción de la calculadora.
3. Importa y usa ambos elementos en `app.js`.

---

#### **Ejercicio 4**: Crear un Módulo de Utilidades

1. Crea un archivo `utils.js` donde exportes las siguientes funciones de manera nombrada:
   - `generarNumeroAleatorio`: genera un número aleatorio entre 0 y 100.
   - `formatearFecha`: formatea la fecha actual en el formato `DD/MM/YYYY`.
2. Importa las funciones en `app.js` y úsala para:
   - Generar un número aleatorio y mostrarlo en la consola.
   - Mostrar la fecha formateada en la consola.

---

#### **Ejercicio 5**: Proyecto de Módulos en una Calculadora Completa

1. Crea los siguientes archivos en una carpeta de proyecto llamada `calculadora`:
   - `suma.js`, `resta.js`, `multiplicacion.js`, y `division.js`: Cada archivo debe exportar una función que realice la operación correspondiente.
2. Crea un archivo `index.js` que importe todas las operaciones y las combine en un solo objeto `Calculadora`, exportándolo como exportación por defecto.
3. Crea un archivo `app.js` en el mismo directorio e importa `Calculadora`. Realiza varias operaciones y muestra los resultados en la consola.

---

### **Respuestas de los Ejercicios**

Aquí tienes las respuestas a los ejercicios planteados. Puedes usar estos ejemplos para verificar si tus soluciones son correctas.

#### Ejercicio 1 - Solución

**operaciones.js**
```javascript
export function suma(a, b) {
  return a + b;
}

export function resta(a, b) {
  return a - b;
}

export function multiplicacion(a, b) {
  return a * b;
}
```

**app.js**
```javascript
import { suma, resta, multiplicacion } from './operaciones.js';

console.log(suma(10, 5)); // 15
console.log(resta(10, 5)); // 5
console.log(multiplicacion(10, 5)); // 50
```

---

#### Ejercicio 2 - Solución

**persona.js**
```javascript
export default {
  nombre: "Ana",
  edad: 30,
  profesion: "Ingeniera"
};
```

**app.js**
```javascript
import persona from './persona.js';

console.log(persona.nombre); // Ana
console.log(persona.edad);   // 30
console.log(persona.profesion); // Ingeniera
```

---

#### Ejercicio 3 - Solución

**calculadora.js**
```javascript
export default function dividir(a, b) {
  return b === 0 ? "Error: División por cero" : a / b;
}

export const descripcion = "Calculadora básica";
```

**app.js**
```javascript
import dividir, { descripcion } from './calculadora.js';

console.log(dividir(20, 5)); // 4
console.log(descripcion); // Calculadora básica
```

---

Estos ejercicios te ayudarán a practicar tanto la importación como la exportación de módulos en JavaScript, cubriendo desde conceptos básicos hasta configuraciones más avanzadas.