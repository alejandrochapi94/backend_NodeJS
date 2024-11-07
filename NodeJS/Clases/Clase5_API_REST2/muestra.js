//server.js
import "dotenv/config";
import express from "express";
import morgan from "morgan"; //3 npm i -D morgan

const app = express();
const port = process.env.PORT || 3000; //mpm i -D dotenv

//Middlewares 2
app.use(morgan("dev"));//3
app.use(express.json()); //2

app.get("/hello", (req, res) => {
  res.status(200).send("Hola, node!");
});

app.listen(port, () => {
  console.log(`Enviroment : ${process.env.NODE_ENV}`);
  console.log("Servidor corriendo en http://localhost:" + port);
})

//export default app;
