const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const clienteSchema = new Schema({
    nombre: { 
        type: String, 
        required: true 
    },
    telefono: {
        type: String,
        required: true
    },
    email: 
    { type: String, 
        required: true
    }
});
const ModelCliente = mongoose.model('Cliente', clienteSchema);
module.exports = ModelCliente;