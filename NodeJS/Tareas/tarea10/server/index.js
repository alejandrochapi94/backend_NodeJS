// creamos el servidor
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');

// creamos el puerto
const PORT = 3000;

app.use(cors({origin: 'http://127.0.0.1:5500'}));
app.use(express.json());
// creamos la ruta
app.get('/', (req, res) => {
    res.send('Hola mundo');
});

app.use('/api', userRoutes);


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
