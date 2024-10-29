# Tareas sobre el manejo de módulos en NodeJS

## Ejercicios básicos


1. Ejercicio 1: Biblioteca de Operaciones Matemáticas

Crea un módulo llamado matematicas.js que exporte las siguientes funciones:

sumar(a, b): Retorna la suma de dos números.

restar(a, b): Retorna la resta de dos números.

multiplicar(a, b): Retorna la multiplicación de dos números.

dividir(a, b): Retorna la división de dos números. Maneja el caso de división por cero.

Crea un archivo app.js que importe el módulo matematicas.js y utiliza las funciones para realizar algunas operaciones. Muestra los resultados en la consola.

2. Ejercicio 2: Gestor de Tareas

Crea un módulo llamado tareas.js.

Define una lista (array) dentro del módulo para almacenar objetos "tarea". Cada objeto tarea tendrá las propiedades: id, nombre, completada (booleano).

Exporta las siguientes funciones:

agregarTarea(nombre): Agrega una nueva tarea a la lista.

mostrarTareas(): Muestra en consola todas las tareas.

marcarCompletada(id): Busca una tarea por su ID y la marca como completada.

En app.js, importa el módulo tareas.js y prueba sus funciones agregando, listando y marcando tareas como completadas.

3. Ejercicio 3: Generador de Contraseñas

Crea un módulo generador.js con una función:

generarContrasena(longitud = 12): Esta función debe generar una contraseña aleatoria con la longitud especificada. Puedes usar letras (mayúsculas y minúsculas), números y símbolos.

Exporta un diccionario con la propiedad:

caracteres: Un string que contiene todos los caracteres posibles para la contraseña.

En app.js importa el módulo y la propiedad caracteres. Utilízala para generar contraseñas y mostrarlas en la consola.

4. Ejercicio 4: Sistema de Usuarios (con Clases)

Crea un módulo usuario.js

Define una clase Usuario con las propiedades nombre, email y contrasena.

El constructor debe recibir estos valores y asignarlos a las propiedades del objeto.

Define un método mostrarInfo() que muestre en consola el nombre y el email del usuario.

En app.js, importa la clase Usuario. Crea dos instancias de la clase con información de usuario diferente y llama al método mostrarInfo() para mostrar sus datos.

## Ejercicios intermedios


1. Ejercicio 1: Gestor de Inventario

Crea un módulo inventario.js.

Define un diccionario llamado productos que almacenará la información de cada producto con el formato: { "id": (número), "nombre": (texto), "precio": (número), "cantidad": (número) }. Inicializa el diccionario con algunos productos de ejemplo.

Exporta las siguientes funciones:

agregarProducto(id, nombre, precio, cantidad): Agrega un nuevo producto al diccionario productos. Valida que el ID no esté repetido.

actualizarCantidad(id, nuevaCantidad): Actualiza la cantidad de un producto específico.

obtenerValorTotalInventario(): Retorna el valor total del inventario (precio * cantidad para cada producto).

En app.js, importa el módulo inventario.js y prueba las funciones agregando productos, actualizando cantidades y mostrando el valor total del inventario.

2. Ejercicio 2: Generador de Facturas

Crea un módulo facturacion.js.

Define una arrow function calcularIVA(precio, porcentajeIVA = 21) que calcule y retorne el IVA de un precio dado.

Crea una clase Factura con las propiedades: cliente (string), items (lista de objetos con formato { "descripcion": (texto), "precio": (número), "cantidad": (número) })

Define dentro de la clase Factura los siguientes métodos:

calcularSubtotal(): Calcula el subtotal de la factura (suma de precio * cantidad de cada item).

calcularTotal(porcentajeIVA): Calcula el total de la factura, incluyendo el IVA calculado con la función calcularIVA.

generarFacturaString(): Retorna un string formateado con la información de la factura (cliente, items, subtotal, IVA y total).

En app.js, crea una instancia de la clase Factura, agrega algunos items y muestra la factura formateada en la consola.

3. Ejercicio 3: Gestor de Contraseñas (Versión Avanzada)

Crea un módulo gestorContrasenas.js.

Define una variable con un array que almacenará objetos "credencial". Cada objeto tendrá el formato: { "sitioWeb": (string), "nombreUsuario": (string), "contrasena": (string) }.

Implementa las siguientes funciones:

agregarCredencial(sitioWeb, nombreUsuario, contrasena): Agrega una nueva credencial al array. Valida que no se repita el sitio web.

obtenerContrasena(sitioWeb): Busca la contraseña asociada a un sitio web. Retorna la contraseña si la encuentra, de lo contrario, un mensaje indicando que no existe.

listarSitiosWeb(): Retorna una lista con todos los sitios web guardados.

En app.js, importa el módulo y proporciona al usuario un menú para agregar credenciales, buscar contraseñas o listar los sitios web guardados.

4. Ejercicio 4: Sistema de Logística

Crea un módulo logistica.js

Define un diccionario de "paquetes" con el formato: { "id": (número), "origen": (string), "destino": (string), "estado": (string, por ejemplo: "En tránsito", "Entregado") }. Inicializa con algunos paquetes de ejemplo.

Crea una clase Camion con las propiedades: matricula (string), capacidad (número) y paquetes (inicialmente una lista vacía).

Añade los métodos a la clase Camion:

cargarPaquete(paquete): Añade un paquete a la lista del camión si hay espacio disponible.

descargarPaquete(id): Busca un paquete por su ID y lo elimina de la lista del camión.

En app.js, crea instancias de Camion y prueba a cargar y descargar paquetes. Muestra la información de los camiones y sus paquetes.

5. Ejercicio 5: Análisis de Datos de Ventas

Crea un módulo ventas.js.

Define un array de objetos, donde cada objeto representa una venta con la siguiente información: { "producto": (string), "precioUnitario": (número), "cantidad": (número), "fecha": (string, formato "AAAA-MM-DD") }.

Exporta las siguientes funciones:

calcularVentasTotalesMes(mes): Calcula las ventas totales (en valor monetario) para un mes específico.

obtenerProductoMasVendido(): Retorna el nombre del producto que más se ha vendido (en cantidad) en todo el conjunto de datos.

calcularPromedioVentasDiario(mes): Calcula el promedio de ventas diarias (en valor monetario) para un mes específico.
