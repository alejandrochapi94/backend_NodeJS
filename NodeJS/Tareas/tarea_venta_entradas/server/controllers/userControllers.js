 const fs = require("fs");
 
 const lista = []

 exports.getLista = (req, res) => {
    // leemos el archivo datos.json
    const data = fs.readFileSync("datos.json", "utf8");
    //convertimos el archivo a un objeto
    const lista_datos = JSON.parse(data); 
    res.json(lista_datos);
 }


 exports.createUser = (req, res) => {
    //crea un id automáticamente
    


    // leemos el archivo datos.json
    const data = fs.readFileSync("datos.json", "utf8");
    //convertimos el archivo a un objeto
    const lista_datos = JSON.parse(data); 
    const newUser = { id: lista_datos.length + 1, ...req.body };
    


    //guardamos los datos en el archivo datos.json
    lista_datos.push(newUser);
    fs.writeFileSync("datos.json", JSON.stringify(lista_datos, null, 2));

    res.status(201).json(newUser);
  };
