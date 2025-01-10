const mongoose = require('mongoose');
const dbconnect = async () => { 
    try {
        await mongoose.connect("mongodb://localhost:27017/dbVeterinaria");
        console.log('Conexion a la base de datos establecida');
    } catch (error) {
        console.error('Error en la conexión a la base de datos:', error);
        process.exit(1)
        
    }
}
module.exports = dbconnect;