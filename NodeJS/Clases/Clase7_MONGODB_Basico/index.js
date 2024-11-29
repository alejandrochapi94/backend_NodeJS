const dotenv = require('dotenv').config();
const express = require('express');
const dbconnect = require('./controllers/config');
const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(express.json());

// Ruta base
app.get('/', (req, res) => {
    res.send('¡Bienvenido a la API QUE USA BASES DE DATOS MONGODB');
});

// Rutas de usuarios
app.use('/users', require('./routes/userRoutes'));

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

// Conexión a la base de datos
dbconnect();
