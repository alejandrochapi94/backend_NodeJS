const express = require('express');
const app = express();
const port = 4001;
const userRoutes = require('./rutas/userRoutes');

app.use(express.json());//middleware para que el servidor pueda entender el formato json

app.get('/alternativa', (req, res) => {
  res.send('El servidor está funcionando');
});

app.use('/user', userRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
