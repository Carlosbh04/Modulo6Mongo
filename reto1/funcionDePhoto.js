// Importar el modelo "Photo"
const Photo = require('./models/photo');

// Función para subir una foto
const uploadPhoto = (user, url, title, description) => {
  const newPhoto = new Photo({
    user,
    url,
    title,
    description,
  });

  return newPhoto.save();
};

// Función para obtener todas las fotos de un usuario
const getPhotosByUser = (user) => {
  return Photo.find({ user });
};

// Función para modificar la descripción de una foto por su título
const updatePhotoDescription = (title, newDescription) => {
  return Photo.findOneAndUpdate({ title }, { description: newDescription }, { new: true });
};

// Función para eliminar una foto de un usuario por su título
const deletePhotoByUserAndTitle = (user, title) => {
  return Photo.findOneAndDelete({ user, title });
};

// Función para eliminar todas las fotos de un usuario
const deleteAllPhotosByUser = (user) => {
  return Photo.deleteMany({ user });
};

// Exportar las funciones para su uso en otros archivos
module.exports = {
  uploadPhoto,
  getPhotosByUser,
  updatePhotoDescription,
  deletePhotoByUserAndTitle,
  deleteAllPhotosByUser,
};
