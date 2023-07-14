const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./router/users');

// Crear una instancia de la aplicación Express
const app = express();

// Conectar a la base de datos
connectDB();

// Configurar middleware para el manejo de datos JSON
app.use(express.json());

// Ruta de bienvenida
app.get('/', (req, res) => {
  res.send('¡Bienvenido a mi aplicación!');
});

// Rutas de usuarios
app.use('/users', userRoutes);

// Puerto de escucha del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
