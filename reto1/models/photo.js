const mongoose = require('mongoose');

// Definir el esquema para el modelo "Photo"
 const photoSchema = new mongoose.Schema({
  user: String,
  url: String,
  title: String,
  description: String,
});

// Crear el modelo "Photo" utilizando el esquema definido
const Photo = mongoose.model('Photo', photoSchema);

// Exportar el modelo "Photo" para su uso en otros archivos
module.exports = Photo;
