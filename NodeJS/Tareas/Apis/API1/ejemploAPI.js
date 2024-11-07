//Un programa que pida a una api un metodo get con fetch

fetch('http://localhost:4000/elie')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

//Ahora con async y await

async function fetchData(){
    const res = await fetch('http://localhost:4000/elie');
    const data = await res.json();
    console.log(data);
}
//Ahora un metodo post con async y await

async function postData(){
    const res = await fetch('http://localhost:4000/elie', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: 'Elie', age: 20})
    });
    const data = await res.json();
    console.log(data);
}

postData();
