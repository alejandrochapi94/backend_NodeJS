//server.js
import "dotenv/config";
import app from "./app.js";

const port = process.env.PORT || 3000; //mpm i -D dotenv

const server= app.listen(port, () => {
    console.log(`Enviroment : ${process.env.NODE_ENV}`);
    console.log("Servidor corriendo en http://localhost:" + port);
  })

  export default server; //necesario para server
