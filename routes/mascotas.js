const express = require("express");
const router = express.Router();
const ModelMascota = require("../models/mascotamodel");
const ModelCliente = require('../models/clientemodel');

// Crear una nueva mascota (POST)
router.post("/mascotas", async (req, res) => {
  try {
    const cliente = await ModelCliente.findById(req.body.cliente_id); 
    if (!cliente) {
        return res.status(404).send({ mensaje: 'Cliente no encontrado' });
    }
  const body = req.body;
  try {
    const nuevaMascota = await ModelMascota.create(body); 
    res.status(201).send(nuevaMascota); 
  } catch (error) {
    res.status(400).send(error); 
  }
} catch (error) {
  res.status(500).send({ mensaje: 'Error al obtener el cliente', error });
}
});

// Obtener todas las mascotas (GET)
router.get('/mascotas', async (req, res) => {
  try {
      const mascotas = await ModelMascota.find();
      res.status(200).send(mascotas);
  } catch (error) {
      res.status(500).send({ mensaje: 'Error al obtener las mascotas', error });
  }
});

// Obtener mascotas de un cliente específico (GET)
router.get("/mascotas/:id", async (req, res) => {
  try {
    const clienteId = req.params.id;

    const cliente = await ModelCliente.findById(clienteId);
    if (!cliente) {
      return res.status(404).send({ mensaje: 'Cliente no encontrado' });
    }

    const mascotas = await ModelMascota.find({ cliente_id: clienteId });
    if (mascotas.length === 0) {
      return res.status(404).send({ mensaje: "No se encontraron mascotas de este dueño" });
    }

    res.status(200).send(mascotas);
  } catch (error) {
    res.status(500).send({ mensaje: "Error al buscar mascotas", error });
  }
});


// Eliminar una mascota por ID (DELETE)
router.delete('/mascotas/:id', async (req, res) => {
  try {
      const mascotaEliminada = await ModelMascota.findByIdAndDelete(req.params.id); 
      if (!mascotaEliminada) {
          return res.status(404).send({ mensaje: 'Mascota no encontrada' });
      }
      res.status(200).send({ mensaje: 'Mascota eliminada correctamente' });
  } catch (error) {
      res.status(500).send({ mensaje: 'Error al eliminar la mascota', error });
  }
});
module.exports = router;
