const apiUrl = 'http://localhost:3000/api/users';
//pedir el menú
async function getUsers() {
    try {
      const response = await fetch(apiUrl); //get (no tiene porque se sobre entiende que es get )
      const users = await response.json();
  
      const userList = document.getElementById('userList');
      userList.innerHTML = ''; // Limpiar la lista de usuarios
  
      users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = `ID: ${user.id} - Nombre: ${user.name} - Email: ${user.email}`;
        userList.appendChild(li);
      });
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
    }
  }

// Función para crear un usuario
document.getElementById('createUserForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
  
    try {
      const response = await fetch(apiUrl, { //fetch
        method: 'POST',//metodo
        headers: {//cabeceras (el idioma en que se va a comunicar   )
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email })//cuerpo (lo que se va a enviar) (lo que quiero del menú)
      });
      
      const newUser = await response.json();
      console.log('Usuario creado:', newUser);
  
      //getUsers(); // Actualizar la lista de usuarios
    } catch (error) {
      console.error('Error al crear usuario:', error);
    }
  });
//put
//delete
