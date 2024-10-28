 Instalación de Node.js en Windows
Descargar el Instalador:

Ve a la página oficial de Node.js y verás opciones para descargar Node.js. La página recomienda la versión LTS (Long-Term Support) para mayor estabilidad, que es ideal para aprendizaje y proyectos de producción. Selecciona el instalador para Windows.
Instalar Node.js:

Ejecuta el archivo .msi descargado y sigue las instrucciones del instalador. Asegúrate de habilitar la opción "Agregar Node.js al PATH" para que puedas ejecutar node desde la consola de Windows.
Una vez que la instalación se complete, abre el símbolo del sistema o PowerShell y ejecuta:

```bash
node -v
```

Esto debería mostrar la versión de Node.js, indicando que se instaló correctamente.

Instalación de npm:

npm (Node Package Manager) se instala automáticamente con Node.js. Puedes verificar su instalación y versión con:

```bash
npm -v
```

npm te permitirá instalar bibliotecas y paquetes para extender las funcionalidades de tus aplicaciones en Node.js.

Primeros Pasos en Node.js
Ejecutar un programa básico de Node.js
Crear un Archivo de Prueba:

Crea una nueva carpeta para tus proyectos de Node.js. Dentro de esta carpeta, crea un archivo llamado app.js.
Escribir Código en app.js:

Abre app.js en un editor de texto (como Visual Studio Code) y escribe:

```js
console.log("¡Hola, Node.js!");
```

Ejecutar el Programa:

En la consola, navega hasta la carpeta donde guardaste app.js y ejecuta:

```bash
node app.js
```

Estructura Básica y Conceptos Clave
JavaScript en el Servidor: Node.js te permite ejecutar JavaScript en el servidor, diferente a cómo JavaScript se ejecuta en el navegador. Aquí puedes crear aplicaciones backend, manejar archivos, realizar conexiones a bases de datos, y mucho más.

Eventos y Asincronía: Node.js es asincrónico y usa un modelo de eventos. Esto significa que es eficiente en el manejo de múltiples solicitudes al mismo tiempo, sin necesidad de crear nuevos hilos por cada solicitud.

4. Módulos en Node.js
Node.js utiliza módulos para organizar el código. Existen módulos internos (como fs para manejar archivos) y puedes también crear tus propios módulos o instalar módulos de terceros usando npm.

Importar Módulos: En Node.js, puedes importar un módulo de esta forma:

```bash
const fs = require('fs'); // fs es el módulo de sistema de archivos
```

Crear un Módulo Propio:

Crea un archivo llamado miModulo.js en tu proyecto:

```js
function saludar(nombre) {
  return `Hola, ${nombre}`;
}
module.exports = saludar;
```

Luego, en app.js puedes importarlo:

```js
const saludar = require('./miModulo');
console.log(saludar('Node.js'));
```

Crear un Servidor Simple con Node.js
Node.js te permite crear un servidor HTTP básico:

En app.js, añade:

```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('¡Hola, bienvenido a mi servidor con Node.js!\n');
});

server.listen(3000, () => {
  console.log('Servidor ejecutándose en http://localhost:3000');
});
```

Ejecutar el Servidor:

Corre el archivo con:

```bash
node app.js
```

## npm init

El comando npm init es fundamental en Node.js, ya que te ayuda a crear un archivo package.json para tu proyecto. Este archivo es esencial, ya que contiene la configuración del proyecto, dependencias, scripts, y otra información importante que ayuda a gestionar y compartir tu proyecto de forma ordenada.

¿Qué es package.json?
El archivo package.json:

Define las dependencias de tu proyecto (librerías y paquetes que necesitas).
Almacena scripts de npm, como comandos para ejecutar, probar, o compilar tu código.
Contiene metadatos de tu proyecto, como el nombre, versión, autor y licencia.
¿Cómo usar npm init?
Abre la Terminal en la carpeta de tu proyecto y ejecuta:

```bash
npm init
```

Sigue las instrucciones que npm te pedirá para completar el archivo package.json:

Nombre del proyecto (name): Este es el nombre de tu proyecto. Por defecto, tomará el nombre de la carpeta, pero puedes modificarlo. ("primer programa")
Versión (version): La versión del proyecto, por defecto es 1.0.0. (enter)
Descripción (description): Un resumen breve del proyecto. ("mi primera app js")
Punto de entrada (entry point): El archivo principal del proyecto (normalmente index.js o app.js). ("index.js)
Comando de prueba (test command): Puedes especificar comandos para ejecutar pruebas (por defecto se deja en blanco).
Repositorio git (git repository): La URL de tu repositorio git, si tienes uno.
Palabras clave (keywords): Palabras clave para que otros encuentren tu proyecto en npm.
Autor (author): Tu nombre o el nombre del autor.
Licencia (license): Tipo de licencia (por defecto es ISC) (Usar MIT)

Confirmar los Datos: Al finalizar, npm te mostrará un resumen de la configuración que has ingresado. Si todo está bien, escribe yes para confirmar y crear el archivo package.json.

**Cómo nos quedará nuestro archivo package.json**
```bash
{
  "name": "primer programa",
  "version": "1.0.0",
  "description": "mi primera app js",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Nombre de prueba <un@email.com> (https://enlaceprueba)",
  "license": "MIT",
  "devDependencies": {
    "nodemon": "^3.1.0"
  }
}

```
Ahora podemos agregar comandos útiles como start y dev
```bash
{
    "start": "node index.js",
    "dev": "node index.js"
}
```

Nuestro código quedaría asi´:

```bash
{
  "name": "primer programa",
  "version": "1.0.0",
  "description": "mi primera app js",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js",
    "dev": "node index.js"
  },
  "author": "Nombre de prueba <un@email.com> (https://enlaceprueba)",
  "license": "MIT",
  "devDependencies": {
    "nodemon": "^3.1.0"
  }
}

```
### Comando Rápido: npm init -y
Si deseas crear un archivo package.json rápidamente sin tener que completar cada paso, puedes usar:

```bash
npm init -y
```

Este comando usa los valores por defecto para cada campo y genera el archivo package.json al instante.


Ejemplo de un package.json Básico
Después de ejecutar npm init, tu archivo package.json puede verse así:

```JSON
{
  "name": "mi-proyecto",
  "version": "1.0.0",
  "description": "Mi primer proyecto en Node.js",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "Tu Nombre",
  "license": "MIT"
}
```
¿Qué más se puede hacer con package.json?
Agregar Dependencias: Cuando instales una dependencia, usa --save o --save-dev para agregarla a tu package.json. Ejemplo:

```bash
npm install express --save
```

sto añadirá a Express en la sección dependencies.

Definir Scripts: Puedes definir comandos en scripts. Ejemplo:

```bash
"scripts": {
  "start": "node app.js",
  "test": "node test.js"
}
```

Ahora puedes ejecutar npm start para correr app.js.

Usar Versionado Semántico: Utiliza npm version <type> (major, minor, o patch) para actualizar la versión del proyecto.


### Para ejecutar nuestro proyecto en modo producción y modo desarrollo

Podemos ejecutar nuestro archivo principal mediante el script
#### Modo producción
```bash
npm run start
```
Ejecutará el comando especificado en start en el package mannager
#### Modo desarrollo
En modo desarrollo
```bash
npm run dev
```


### Ejecutar el Proyecto en Modo Producción con `npm start`

1. **Configurar el Script `start`**:
   - En el archivo `package.json`, agrega el script `start` en la sección `"scripts"`. Por ejemplo:
     ```json
     "scripts": {
       "start": "node app.js"
     }
     ```
   - Aquí, `"node app.js"` indica a npm que ejecute `app.js` (o el archivo principal de tu aplicación) usando Node.js. Este es el modo **producción**, ideal para cuando tienes una versión lista para desplegar o utilizar.

2. **Ejecutar el Comando**:
   - Usa el siguiente comando para iniciar tu proyecto en producción:
     ```bash
     npm start
     ```
   - O alternativamente:
     ```bash
     npm run start
     ```
   - **Nota**: `npm start` es un script especial que no necesita el prefijo `run`. Este comando ejecutará el archivo principal (`app.js` en este caso) de la forma que hayas especificado en `start`.

### Ejecutar el Proyecto en Modo Desarrollo con `npm run dev`


En modo desarrollo, puedes querer que la aplicación se reinicie automáticamente cada vez que haces cambios. Aquí es donde entra `npm run dev` con herramientas como **nodemon**.

1. **Instalar `nodemon`**:
   - `nodemon` es una herramienta popular que reinicia automáticamente el servidor cuando detecta cambios en los archivos de tu proyecto, lo cual es muy útil para desarrollo.
   - Instala `nodemon` como dependencia de desarrollo:
   - Primera opción
     ```bash
     npm install nodemon --save-dev
     ```
   


2. **Configurar el Script `dev`**:
   - Agrega el script `dev` en la sección `"scripts"` de `package.json`:
     ```json
     "scripts": {
       "start": "node app.js",
       "dev": "nodemon app.js"
     }
     ```
   - Aquí, `"nodemon app.js"` le dice a npm que inicie el archivo `app.js` utilizando `nodemon`, para que se reinicie automáticamente cada vez que hagas un cambio en el código.

3. **Ejecutar el Comando en Modo Desarrollo**:
   - Usa el siguiente comando para ejecutar tu aplicación en modo desarrollo:
     ```bash
     npm run dev
     ```

Con esto, `nodemon` detectará cualquier cambio en tus archivos y reiniciará el servidor automáticamente. Es perfecto para el desarrollo, ya que te permite ver los cambios sin reiniciar manualmente cada vez.

### Ejemplo Completo de `package.json` con `start` y `dev`

Aquí tienes un ejemplo completo de `package.json` con ambos scripts configurados:
```json
{
  "name": "mi-proyecto",
  "version": "1.0.0",
  "description": "Mi proyecto de Node.js",
  "main": "app.js",
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
  },
  "dependencies": {},
  "devDependencies": {
    "nodemon": "^3.0.1"
  },
  "keywords": [],
  "author": "Tu Nombre",
  "license": "ISC"
}
```

Información sobre licencias:

https://www.velneo.com/blog/licencias-software-libre-propietario-otros

https://www.ideasnegocios.org/licencia-mit/

https://www.iebschool.com/blog/modelos-negocios-software-libre-open-source-digital-business/

# A practicar

Digirirse a la carpeta Tareas y leer el README.md dentro de ella.
Crear una carpeta individual para cada tarea por favor.