// creamos el servidor
const express = require("express");
const app = express();
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");

// creamos el puerto
const PORT = 3000;

//usamos json
app.use(express.json());

//usamos cors
app.use(cors({ origin: "http://127.0.0.1:5500" }));


app.use("/user", userRoutes);
// creamos la ruta
app.get("/", (req, res) => {
  res.send("Hello World");
});

// iniciamos el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
