const express = require('express');
const dbconnect = require(('./config'));

const Routes = require('./routes/userRoutes');
const app = express();


app.use(express.json());
app.use('/api', Routes);
app.listen(3001, () => {
    console.log('Servidor corriendo en http://localhost:3001');
});

dbconnect();