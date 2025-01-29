const express = require("express");
const router = express.Router();
const ModelCliente = require("../models/clientemodel");
const ModelMascota = require("../models/mascotamodel");

// Obtener todos los clientes (GET)
router.get("/clientes", async (req, res) => {
  try {
    const clientes = await ModelCliente.find();
    res.status(200).send(clientes);
  } catch (error) {
    res.status(500).send({ mensaje: "Error al obtener los clientes", error });
  }
});

// Obtener un cliente por ID (GET)
router.get("/clientes/:id", async (req, res) => {
  try {
    const cliente = await ModelCliente.findById(req.params.id);
    if (!cliente) {
      return res.status(404).send({ mensaje: "Cliente no encontrado" });
    }
    res.status(200).send(cliente);
  } catch (error) {
    res.status(500).send({ mensaje: "Error al obtener el cliente", error });
  }
});

// Crear un nuevo cliente (POST)
router.post("/clientes", async (req, res) => {
  const body = req.body;
  try {
    const nuevoCliente = await ModelCliente.create(body); // Insertar en la base de datos
    res.status(201).send(nuevoCliente); // 201 indica que se ha creado un recurso
  } catch (error) {
    res.status(400).send(error); // Manejar errores
  }
});

// Actualizar un cliente por ID (PUT)
router.put("/clientes/:id", async (req, res) => {
  try {
    const clienteActualizado = await ModelCliente.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!clienteActualizado) {
      return res.status(404).send({ mensaje: "Cliente no encontrado" });
    }
    res.status(200).send(clienteActualizado);
  } catch (error) {
    res.status(400).send({ mensaje: "Error al actualizar el cliente", error });
  }
});

// Eliminar un cliente por ID y todas sus mascotas asociadas (DELETE)
router.delete('/clientes/:id', async (req, res) => {
    try {
        const clienteId = req.params.id;

        // Buscar el cliente
        const clienteEliminado = await ModelCliente.findByIdAndDelete(clienteId);
        if (!clienteEliminado) {
            return res.status(404).send({ mensaje: 'Cliente no encontrado' });
        }

        // Buscar y eliminar todas las mascotas asociadas al cliente
        const mascotas = await ModelMascota.find({ cliente_id: clienteId });
        
        if (mascotas.length > 0) {
            await ModelMascota.deleteMany({ cliente_id: clienteId });
        }

        return res.status(200).send({ mensaje: 'Cliente y todas sus mascotas eliminados correctamente' });

    } catch (error) {
        console.error(error);
        return res.status(500).send({ mensaje: 'Error al eliminar el cliente', error });
    }
});


module.exports = router;
