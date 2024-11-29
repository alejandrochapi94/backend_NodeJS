// creamos el servidor
const express = require("express");
const app = express();
const userRoutes = require("./Routes/userRoutes");
const cors = require("cors");

// configuramos el servidor
app.use(express.json());

app.use(cors({ origin: "http://127.0.0.1:5501" }));

app.get("/", (req, res) => {
  res.send("Hola mundo");
});
app.use("/api/users", userRoutes);

app.listen(3001, () => {
  console.log("Servidor corriendo en el puerto 3001");
});

//module.exports = app;
