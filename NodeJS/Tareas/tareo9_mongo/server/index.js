const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const connectDB = require("./config");

const app = express();

app.use(cors({origin: "http://127.0.0.1:5500"}));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use('/users', require('./routes/userRoutes'));

app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});

connectDB();
