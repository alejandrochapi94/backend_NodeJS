
## **Ejercicio: Sistema básico de To-Do List**

### **Objetivo:**
Construir una aplicación de lista de tareas (To-Do List) que permita interactuar con un servidor desarrollado en Node.js utilizando **Express**. La aplicación debe ser capaz de:
1. Mostrar una lista de tareas.
2. Agregar nuevas tareas.
3. Eliminar tareas específicas.

El servidor almacenará las tareas en un archivo JSON local.

---

### **Requisitos del ejercicio**

#### **Configuración general:**
1. **Inicializa un proyecto de Node.js**:
   - Configura un proyecto usando `npm init -y`.
   - Instala las siguientes dependencias:
     - `express`: para crear el servidor.
     - `cors`: para permitir peticiones desde otros orígenes (aunque trabajes localmente).
     - `nodemon`: para recargar el servidor automáticamente durante el desarrollo.

   Comando sugerido para instalar:
   ```bash
   npm install express cors
   npm install --save-dev nodemon
   ```

2. **Script en `package.json` para nodemon**:
   - Configura un script para iniciar el servidor con `nodemon`:
     ```json
     "scripts": {
       "start": "nodemon server.js"
     }
     ```

3. **Estructura del proyecto**:
   Organiza los archivos del proyecto con la siguiente estructura:
   ```plaintext
   project/
   ├── server.js        # Código principal del servidor
   ├── tasks.json       # Archivo para almacenar las tareas
   └── public/          # Archivos estáticos
       ├── index.html   # Interfaz de usuario
       └── app.js       # Lógica del cliente (fetch)
   ```

---

#### **Requisitos del servidor:**
1. **Configuración del servidor:**
   - Usa **Express** para manejar las rutas.
   - Usa **CORS** para habilitar solicitudes desde otros orígenes.
   - Sirve los archivos estáticos (HTML, JS) desde la carpeta `public`.
   - Configura el servidor para que use el puerto `3000`.

2. **Rutas de la API:**
   Implementa las siguientes rutas RESTful:

   - **GET `/api/tasks`**  
     Retorna todas las tareas almacenadas en el archivo `tasks.json`. Si no hay tareas, retorna un arreglo vacío.
   
   - **POST `/api/tasks`**  
     Recibe un objeto JSON con el texto de la tarea (`{ text: "Nueva tarea" }`) y:
       - Crea una tarea con un ID único (puedes usar `Date.now()` para generar el ID).
       - Agrega la tarea al archivo `tasks.json`.
       - Retorna la tarea recién creada.

   - **DELETE `/api/tasks/:id`**  
     Elimina una tarea específica por su ID. Si el ID no existe, responde con un error apropiado.

3. **Archivo `tasks.json`:**
   - Crea un archivo `tasks.json` en la raíz del proyecto. Al iniciar, este archivo debe contener un arreglo vacío:
     ```json
     []
     ```

---

#### **Requisitos del frontend:**
1. **Archivo `index.html`:**
   - Contiene una lista no ordenada (`<ul>`) donde se mostrarán las tareas.
   - Incluye un campo de entrada de texto (`<input>`) para escribir nuevas tareas.
   - Incluye un botón para agregar tareas.

2. **Archivo `app.js`:**
   - Implementa las siguientes funcionalidades:
     - **Mostrar las tareas existentes:**
       Realiza una petición `GET` a `/api/tasks` y muestra las tareas en la lista.
     - **Agregar una nueva tarea:**
       Realiza una petición `POST` a `/api/tasks` con el texto ingresado en el campo de entrada. Actualiza la lista al agregar.
     - **Eliminar una tarea:**
       Cada tarea mostrada debe incluir un botón para eliminarla. Al hacer clic, realiza una petición `DELETE` a `/api/tasks/:id` y actualiza la lista.

---

### **Elementos que debe tener la propuesta:**

1. **Funcionamiento del servidor:**
   - El servidor debe iniciar correctamente y responder a las rutas especificadas.
   - El archivo `tasks.json` debe actualizarse correctamente al agregar o eliminar tareas.

2. **Frontend funcional:**
   - La lista de tareas debe actualizarse dinámicamente al agregar o eliminar tareas.
   - Deben usarse peticiones `fetch` para interactuar con la API.

3. **Organización del proyecto:**
   - Sigue la estructura propuesta.
   - Usa buenas prácticas para manejar errores y validar datos en el servidor.

4. **Extras opcionales (no obligatorios):**
   - Validar que no se puedan agregar tareas vacías.
   - Mostrar un mensaje de confirmación antes de eliminar una tarea.
   

---

### **Ejemplo de interacción:**

1. **Al abrir la página**:  
   Se debe ver la lista de tareas actuales (vacía si es la primera vez) y un formulario para agregar nuevas tareas.

2. **Al agregar una tarea**:  
   Escribe "Comprar leche" en el campo de texto, haz clic en el botón "Agregar" y observa cómo la tarea aparece en la lista.

3. **Al eliminar una tarea**:  
   Haz clic en el botón "Eliminar" junto a una tarea y observa cómo desaparece de la lista y del archivo `tasks.json`.

