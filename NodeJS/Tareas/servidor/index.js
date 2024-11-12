// crear servi
import app from "./modulo.js";
import "dotenv/config";
import express from "express";


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});



