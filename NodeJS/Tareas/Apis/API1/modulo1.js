//Funcionalidades de la API
//Express sirve para crear un servidor
//const express = require('express'); //npm install express
import "dotenv/config";
import express from 'express';
import morgan from "morgan";
//Creamos una variable que es el servidor
const app = express(); //Llamada a la función (ejecutando el servidor)



//Middleware para JSON
app.use(morgan('dev'));
app.use(express.json());
//Rutas
app.get('/elie', (req, res) => { //get sirve para obtener datos
    let nombre = "jose";
    res.status(200).send(nombre);
    
});

export default app;