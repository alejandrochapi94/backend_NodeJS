document.getElementById('cargarDatos').addEventListener('click', function(){

    fetch('http://localhost:3000/api/users')
    .then(response => response.json())
    .then(data => data.forEach(user => {
        const div = document.createElement('div');
        div.textContent = user.r;
        document.getElementById('contenedorDatos').appendChild(div);
    }))

    .catch(error => console.error('Error al cargar los datos:', error));

});