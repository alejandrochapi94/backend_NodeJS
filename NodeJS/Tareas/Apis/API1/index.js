//Servidor
import "dotenv/config"; //npm install dotenv
//Immportación del módulo1
import app from "./modulo1.js"; //Error

const PORT = process.env.PORT || 3000; //En el servidor no poemos elegir este puerto, sino que es el que nos da el sistema operativo


//Iniciar el servidor (Poner al servidor a escuchar)
const server = app.listen(PORT, () => {
    //Para saber que puerto esta escuchando
    console.log(`El entorno de ejecución es: ${process.env.NODE_ENV}`);
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


//Exportar el servidor
export default server; //Necesario para que el servidor se pueda usar en otros archivos 

