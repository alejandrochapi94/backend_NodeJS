

document.getElementById("formulario").addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;

    fetch("http://localhost:3000/users/login", {
        method: "POST",
        body: JSON.stringify({ name, email }),
        headers: { "Content-Type": "application/json" },
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
});
