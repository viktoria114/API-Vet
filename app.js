const express = require('express');
const app = express();
const dbconnect = require('./config/db'); // Importar la conexión a la base de datos
const clientesRoutes = require('./routes/clientes')
const mascotasRoutes = require('./routes/mascotas')
const port = 3000;

app.use(express.json()); // Middleware para interpretar JSON

// Usar las rutas de libros
app.use(clientesRoutes);
app.use(mascotasRoutes);

// Ruta raíz que devuelve un mensaje
app.get('/', (req, res) => {
  res.send('¡Bienvenido a mi API de libros!');
});

// Iniciar el servidor
dbconnect().then(() => {
    app.listen(port, () => {
        console.log(`Servidor corriendo en http://localhost:${port}`);
      });
    
}).catch(err => {
    console.error('No se pudo iniciar el servidor debido a un error en la base de datos');
});

