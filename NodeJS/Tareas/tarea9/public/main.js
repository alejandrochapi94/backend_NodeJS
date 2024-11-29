document.getElementById("enviar").addEventListener("click", async() => {
  alert("click");

  const nombre = document.getElementById("nombre").value;
  const cedula = document.getElementById("cedula").value;

  const data = {
    nombre,
    cedula
  }



  const post_data = await fetch("http://localhost:3001/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    
  });

  const nuevo= await post_data.json();
  console.log(nuevo);

});
