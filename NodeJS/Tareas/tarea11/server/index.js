const express = require("express");
const cors = require("cors");
const db = require("db-local");

const app = express();

app.use(cors({ origin: "http://127.0.0.1:5500" }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

module.exports = app;
