# API-Veterinaria
Gestiona tus clientes y mascotas facilmente!

Es una API destinada a la gestión total de clientes y parcialmente de sus mascotas.


- Gestión completa de clientes: crear, leer, actualizar, eliminar (CRUD).
- Gestión parcial de mascotas: crear, leer de un cliente, eliminar (CRUD).
- Persistencia de datos en MongoDB.


Tecnologias utilizadas
- **Backend**: Node.js, Express.js.
- **Base de Datos**: MongoDB con Mongoose.


Cómo Instalar y Usar
1. Clonar el repositorio:
git clone https://github.com/viktoria114/API-Vet.git

2. Instalar dependencias:
npm install

3. Configurar variables de entorno:
Crea un archivo .env en la raíz del backend con estas variables:
MONGO_URI = mongodb+srv://vik:b6kFdfQdf3IG8LR2@gestionvet.ui49s.mongodb.net/?retryWrites=true&w=majority&appName=gestionvet

4. Ejecutar el proyecto (local):
npm run dev

https://api-vet-six.vercel.app (para usar desde vercel)


Estructura del Proyecto
- API-Vet/
- ├── config/         
- │   ├── db.js               #configuracion de moongose
- ├── models/                 #esquema de la bd
- │   |── clientemodel.js
- │   ├── mascotamodel.js
- ├── node_modules/ 
- ├── routes/                 #rutas con los endpoints especificos
- │   |── clientes.js
- │   ├── mascotas.js
- ├── .env                    #variables de entorno
- ├── .gitignore
- ├── app.js                  #archivo de inicio
- ├── package-lock.json
- ├── package.json
- ├── README.md
- ├── vercel.json


API Endpoints
- Método      EndPoint        Descripción
- GET         /clientes       Obtiene todos los clientes
- POST        /clientes       Crea un nuevo cliente
- GET         /clientes/:id   Obtiene un cliente específico por id
- PUT         /clientes/:id   Actualiza un cliente específico por id
- DELETE      /clientes/:id   Borra un cliente específico por id

- POST        /mascotas       Crea una mascota de un cliente específico
- GET         /mascotas:id    Obtiene las mascotas de un cliente específico
- DELETE      /mascotas/:id   Borra una mascota específica por id


Créditos y despliegue
Por: Arancio Oviedo María Victoria
GitHub: https://github.com/viktoria114