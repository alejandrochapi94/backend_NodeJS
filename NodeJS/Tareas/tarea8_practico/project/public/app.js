// obneter los datos de taskInput en el archivo index.html para mandarlos a la API tasks.json.

// Función para crear el HTML de una tarea
function createTaskHTML(task) {
    return `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <div>
                <input type="checkbox" class="task-checkbox me-2">
                <span class="task-text">${task}</span>
                <span class="badge bg-secondary ms-2 task-status">Pendiente</span>
            </div>
            <button class="btn btn-danger btn-sm delete-task">Eliminar</button>
        </li>
    `;
}

document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const taskInput = document.getElementById('taskInput').value;
    
    // Usar la nueva función para crear el HTML de la tarea
    document.getElementById('taskList').innerHTML += createTaskHTML(taskInput);
    
    // enviar los datos a la API tasks.json
    fetch('http://127.0.0.1:3000/api/users', {  
        method: 'POST',
        body: JSON.stringify({ task: taskInput }),
        headers: { 'Content-Type': 'application/json' }

        
    });
    document.getElementById('taskInput').value = '';
   
});


//traer datos de la API y mostrarlos en el HTML

document.addEventListener('DOMContentLoaded', function() {
    fetch('http://127.0.0.1:3000/api/users')
        .then(response => response.json())
        .then(data => {
            const taskList = document.getElementById('taskList');
            taskList.innerHTML = data.map(task => 
                createTaskHTML(task.tarea || task.task)
            ).join('');
        })
        .catch(error => console.error('Error:', error));
});

// Agregar los event listeners para checkbox y botón eliminar
document.getElementById('taskList').addEventListener('click', function(e) {
    if (e.target.classList.contains('task-checkbox')) {
        const statusBadge = e.target.closest('li').querySelector('.task-status');
        statusBadge.textContent = e.target.checked ? 'Completada' : 'Pendiente';
        statusBadge.className = `badge ms-2 task-status ${e.target.checked ? 'bg-success' : 'bg-secondary'}`;
    }
    
    if (e.target.classList.contains('delete-task')) {
        e.target.closest('li').remove();
        // Aquí deberás agregar el código para eliminar la tarea del servidor
    }
});
