const apiUrl = 'http://localhost:3000/api/users';

// Función para obtener usuarios
async function getUsers() {
  try {
    const response = await fetch(apiUrl); //Método get principal
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
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email })
    });
    
    const newUser = await response.json();
    console.log('Usuario creado:', newUser);

    getUsers(); // Actualizar la lista de usuarios
  } catch (error) {
    console.error('Error al crear usuario:', error);
  }
});

// Función para actualizar un usuario
document.getElementById('updateUserForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const id = document.getElementById('updateId').value;
  const name = document.getElementById('updateName').value;
  const email = document.getElementById('updateEmail').value;

  try {
    const response = await fetch(`${apiUrl}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email })
    });
    
    const updatedUser = await response.json();
    console.log('Usuario actualizado:', updatedUser);

    getUsers(); // Actualizar la lista de usuarios
  } catch (error) {
    console.error('Error al actualizar usuario:', error);
  }
});

// Función para eliminar un usuario
document.getElementById('deleteUserForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const id = document.getElementById('deleteId').value;

  try {
    const response = await fetch(`${apiUrl}/${id}`, {
      method: 'DELETE'
    });

    console.log('Usuario eliminado:', await response.json());

    getUsers(); // Actualizar la lista de usuarios
  } catch (error) {
    console.error('Error al eliminar usuario:', error);
  }
});