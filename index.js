const express = require("express");
const app = express();
const port = 3001;
const expoController = require("./controllers/expo.js");
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/test")
  .then(() => {
    console.log("Base Datos Conexión Exitosa");
  })
  .catch((err) => {
    console.log("Error Contactando a BD");
  });

app.get("/", (req, res) => {
  res.send("Pagina Principal Api");
});

app.post("/expos", expoController.createExpo);
app.get("/expos", expoController.getExpos);

app.get("/ejemplo", (req, res) => {
  res.json({
    name: "Ambientes Totales",
    author: "Sofia",
    descripcion: "descripcion",
  });
});

app.listen(port, () => {
  console.log("Escuchando del puerto " + port);
});
