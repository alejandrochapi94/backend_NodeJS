 // importamos el fs
 const fs = require('fs');

 
 // funcion suma

 exports.sum = (req, res) => {

    const { a, b } = req.body;
    const r = a + b;
    //leer el archivo
    const ruta = './controllers/datos.json';//"Absoluta"
    
    fs.readFile(ruta, (err, data) => {
      if (err) {
          console.error('Error al leer el archivo:', err);
          return res.status(500).json({ error: 'Error al leer el archivo' });
      } else{
        
        const users = JSON.parse(data);
        users.push({r: r});
        fs.writeFileSync(ruta, JSON.stringify(users, null, 2));
        res.json(users);
      }
    res.json("ya hice la suma");
    //res.json(a + b);

  });
}
  

exports.res = (req, res) => {

  const { a, b } = req.body;
  const r = a - b;

  const ruta = './controllers/datos.json'
  fs.readFile(ruta, (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return res.status(500).json({ error: 'Error al leer el archivo' });
    } else{
      const users = JSON.parse(data);
      users.push({r: r});
      fs.writeFileSync(ruta, JSON.stringify(users, null, 2));
      res.json(users);
    }
  });
}


exports.mul = (req, res) => {

  const { a, b } = req.body;
  const r = a * b;

  const ruta = './controllers/datos.json'
  fs.readFile(ruta, (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return res.status(500).json({ error: 'Error al leer el archivo' });
    } else{
      const users = JSON.parse(data);
      users.push({r: r});
      fs.writeFileSync(ruta, JSON.stringify(users, null, 2));
      res.json(users);
    }
  });
}

exports.div = (req, res) => {

  const { a, b } = req.body;
  const r = a / b; 

  const ruta = './controllers/datos.json'
  fs.readFile(ruta, (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return res.status(500).json({ error: 'Error al leer el archivo' });
    } else{
      const users = JSON.parse(data);
      users.push({r: r});
      fs.writeFileSync(ruta, JSON.stringify(users, null, 2));
      res.json(users);
    }
  });

}



