//Modulo arrahy


function agregarTarea(nombre) {
    //Leer el archivo json
    const fs = require('fs');
    const data = JSON.parse(fs.readFileSync('archivo.json', 'utf8'));
    
    //Agregar la tarea (Creando un objeto tarea y lo llenamos con la info)
    const tarea = {
        id: data.tareas.length + 1,
        nombre: nombre,
        completada: false
    };

    //Agregar la tarea al arreglo de tareas
    data.tareas.push(tarea);
    
    //Guardar el archivo json
    fs.writeFileSync('archivo.json', JSON.stringify(data, null, 2));
}

function mostrarTareas() {
    const fs = require('fs');
    const data = JSON.parse(fs.readFileSync('archivo.json', 'utf8'));
    console.log(data.tareas);
}

function marcarCompletada(id) {
    const fs = require('fs');
    const data = JSON.parse(fs.readFileSync('archivo.json', 'utf8'));
    const tarea = data.tareas.find(tarea => tarea.id === id);
    console.log("tarea encontrada");
    tarea.completada = true;
    console.log("tarea actualizada");
    fs.writeFileSync('archivo.json', JSON.stringify(data, null, 2));
}


module.exports = {
    agregarTarea,
    mostrarTareas,
    marcarCompletada
};

