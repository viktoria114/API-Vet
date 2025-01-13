const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mascotaSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  
  especie: {
    type: String,
    required: true,
  },

  raza: String,

  edad: Number,

  myFile: String,

  cliente_id: {
    type: mongoose.Schema.Types.ObjectId, // Referencia a un documento de Cliente
    ref: "Cliente", // Nombre del modelo referenciado
    required: true,
  },
});
const ModelMascota = mongoose.model("Mascota", mascotaSchema);
module.exports = ModelMascota;
