//server.js
import "dotenv/config";
import express from "express";
import morgan from "morgan"; //3 npm i -D morgan

const app = express();

//Middlewares 2
app.use(morgan("dev"));//3
app.use(express.json()); //2

app.get("/hello", (req, res) => {
  res.status(200).send("Hola, node!");
});


export default app;
