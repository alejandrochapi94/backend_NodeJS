# Tarea Nº1

## Practicando con node.js

¡Me parece una excelente idea! Aquí tienes una lista de ejercicios que te permitirán practicar los conceptos aprendidos hasta ahora, como la configuración del proyecto con `npm init`, los scripts `start` y `dev`, y la importación de módulos. Te recomiendo que crees un proyecto separado para cada ejercicio o los agrupes en carpetas dentro de un mismo proyecto para mantener el código organizado.

### Ejercicio 1: Crear un Proyecto Básico con `npm init`
1. **Objetivo**: Configura un proyecto básico de Node.js.
2. **Instrucciones**:
   - Crea una nueva carpeta para el proyecto.
   - Ejecuta `npm init` para crear el archivo `package.json`.
   - Completa el archivo con la información solicitada.
   - Agrega `"start": "node app.js"` en el campo `scripts` del archivo `package.json`.
   - Crea un archivo `app.js` que contenga un mensaje de bienvenida, por ejemplo: `console.log("Bienvenido a mi proyecto de Node.js")`.
   - Ejecuta el proyecto usando `npm start`.

### Ejercicio 2: Configurar el Modo Desarrollo con `nodemon`
1. **Objetivo**: Practicar el uso de `nodemon` para automatizar el reinicio de la aplicación en desarrollo.
2. **Instrucciones**:
   - Instala `nodemon` como una dependencia de desarrollo (`npm install nodemon --save-dev`).
   - Agrega un script `"dev": "nodemon app.js"` en la sección `scripts` de tu `package.json`.
   - Modifica el archivo `app.js` para que muestre un mensaje personalizado, como `console.log("Aplicación en modo desarrollo...")`.
   - Ejecuta el proyecto en modo desarrollo con `npm run dev`.
   - Modifica el contenido de `app.js` y verifica que `nodemon` reinicia automáticamente el proyecto.

### Ejercicio 3: Crear Módulos y Usarlos en tu Proyecto
1. **Objetivo**: Practicar la creación y uso de módulos en Node.js.
2. **Instrucciones**:
   - Crea un nuevo archivo llamado `utils.js` en la misma carpeta donde está `app.js`.
   - Define en `utils.js` una función llamada `saludar(nombre)` que tome un nombre como parámetro y devuelva un saludo personalizado, por ejemplo, `"Hola, nombre!"`.
   - Exporta esta función usando `module.exports`.
   - Importa la función `saludar` en `app.js` y úsala para saludar a alguien.
   - Ejecuta el proyecto con `npm start` y `npm run dev`.

### Ejercicio 4: Crear y Usar Módulos Personalizados en un Proyecto Complejo
1. **Objetivo**: Crear módulos personalizados para dividir la lógica en partes manejables.
2. **Instrucciones**:
   - Crea una carpeta llamada `calculadora` con el archivo `app.js`.
   - Crea un módulo `suma.js` que tenga una función `sumar(a, b)` y exporte esta función.
   - Crea otros módulos `resta.js`, `multiplicacion.js` y `division.js` que contengan funciones de operaciones correspondientes.
   - En `app.js`, importa estos módulos y usa las funciones para realizar operaciones con valores dados.
   - Ejecuta `npm start` para ver los resultados.

### Ejercicio 5: Crear un Archivo de Configuración usando `require`
1. **Objetivo**: Crear un módulo de configuración para definir y usar variables globales.
2. **Instrucciones**:
   - Crea un archivo `config.js` que exporte un objeto con algunas variables, como:
     ```javascript
     module.exports = {
       nombreApp: "MiAplicacionNode",
       version: "1.0.0",
       modo: "desarrollo"
     };
     ```
   - Importa `config.js` en `app.js` y usa las variables para imprimir un mensaje, como `"Estás ejecutando MiAplicacionNode en modo desarrollo"`.
   - Ejecuta `npm run dev` para ver el mensaje.

