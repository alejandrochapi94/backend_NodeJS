const express = require('express');//npm install nodemon 
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para manejar JSON
/*
const corsOptions = {
    origin: 'http://localhost:5500', // Reemplaza con la URL desde la cual accederás a la API
    methods: 'GET,POST,PUT,DELETE' // Opcional, especifica métodos permitidos
  };
app.use(cors(corsOptions));
*/
//app.use(cors());
app.use(cors({ origin: 'http://127.0.0.1:5500' })); // Reemplaza con la URL desde la cual accedes a tu API

app.use(express.json());

// Rutas
app.get('/api', (req, res) => {
  res.send('¡Bienvenido a mi API REST!');//la api retorna una respuesta
});

// Importa tus rutas
const userRoutes = require('./routes/userRoutes');
app.use('/users/user', userRoutes);

//http://localhost:3000/users/user/

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
