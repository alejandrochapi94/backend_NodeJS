//optenemos los datos de los campos, validando que sean correctos.

document.getElementById("btn-comprar").addEventListener("click", (event) => {
event.preventDefault();

  const nombreCompleto = document.getElementById("nombreCompleto").value;
  const cedula = document.getElementById("cedula").value;
  const email = document.getElementById("email").value;
  const tarjeta = document.getElementById("tarjeta").value;


   
  //validamos que los campos no esten vacios
  if (nombreCompleto === "" || cedula === "" || email === "" || tarjeta === "") {
    alert("Por favor, complete todos los campos");
    return;
  }
let bandera = true;
  // validamos que el nombre no contenga numeros
  
  if (!/^([a-zA-ZñÑáéíóúÁÉÍÓÚ])+$/i.test(nombreCompleto) ) {
    alert("el nombre solo puede contener letras");
    bandera = false;
    return
  }

// validamos que la cedula tenga 10 digitos y no letras
if (cedula.length !== 4 || isNaN(cedula)) {
  alert("La cedula debe tener 10 digitos y no letras");
  bandera = false;
  return;
}

// validamos que el email sea valido
if (!email.includes("@")) {
  alert("El email no es valido");
  bandera = false;
  return;
}

// validamos que la tarjeta tenga 16 digitos
if (tarjeta.length !== 4 || isNaN(tarjeta)) {
  alert("La tarjeta debe tener 16 digitos y no letras");
  bandera = false;  
  return;
}

if (bandera === true) {
  alert("compra exitosa");

   try{
    const datos = fetch("http://localhost:3000/user/lista", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombreCompleto, cedula, email, tarjeta }),
  }); 
  
  datos.then(response => response.json())
  .then(data => {
    console.log(data);
    })
    .catch(error => console.error('Error:', error));
  } catch (error) {
    console.error('Error:', error);
  }
}
});


document.addEventListener("DOMContentLoaded", () => {
  const datos = fetch("http://localhost:3000/user/lista")
  .then(response => response.json())
  .then(data => {
    const datos = document.getElementById("datos");
    data.forEach(item => {
      datos.innerHTML += `<p>${item.nombreCompleto} - numero de asiento: ${item.id}</p>`;
    });
  });
});
