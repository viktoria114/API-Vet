const express = require("express");
const router = express.Router();
const ModelMascota = require("../models/mascotamodel");

// Crear una nueva mascota (POST)
router.post("/mascotas", async (req, res) => {
  const body = req.body;
  try {
    const nuevaMascota = await ModelMascota.create(body); // Insertar en la base de datos
    res.status(201).send(nuevaMascota); // 201 indica que se ha creado un recurso
  } catch (error) {
    res.status(400).send(error); // Manejar errores
  }
});

// Obtener mascotas de un cliente especifico (GET)
router.get("/mascotas", async (req, res) => {
  const cliente_id = req.query.cliente_id;

  try {
    const query = {};
    if (cliente_id) query.cliente_id = cliente_id;
    
    const mascotas = await ModelMascota.find(query);
    if (!mascotas) {
      return res
        .status(404)
        .send({ mensaje: "No se encontraron mascotas de este dueño" });
    }

    res.status(200).send(mascotas);
  } catch (error) {
    res.status(500).send({ mensaje: "Error al buscar mascotas", error });
  }
});

module.exports = router;
