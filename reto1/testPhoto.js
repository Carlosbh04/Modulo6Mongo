const { uploadPhoto, getPhotosByUser, updatePhotoDescription, deletePhotoByUserAndTitle, deleteAllPhotosByUser } = require('./funcionDePhoto');
const mongoose = require('mongoose');

// Conectarse a la base de datos
mongoose.connect('mongodb+srv://Codenotch:X29513321x%40@codenotch.m9tp7oo.mongodb.net/Photo', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexión a MongoDB establecida');

    // Subir una foto
    // uploadPhoto('Juan', 'https://elcomercio.pe/resizer/kc2nqEr1Pd_uiWnxAiXaIJR66DM=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/2RJ5QZDRQZDDPNDE3UY2Y2OA7Y.jpg', 'Foto 4', 'Cantante')
    //   .then(savedPhoto => {
    //     console.log('Foto guardada:', savedPhoto);
    //   })
    //   .catch(error => {
    //     console.error('Error al guardar la foto:', error);
    //   });

    // Obtener todas las fotos de un usuario
    // getPhotosByUser('luis Rodriguez')
    // .then(photos => {
    //   photos.forEach((photo, index) => {
    //     console.log(`Foto ${index + 1}:`);
    //     console.log('Título:', photo.title);
    //     console.log('URL:', photo.url);
    //     console.log('-------------------');
    //   });
    // })
    // .catch(error => {
    //   console.error('Error al obtener las fotos del usuario:', error);
    // });
  

//     // Modificar la descripción de una foto por su título
    // updatePhotoDescription('Luchador', 'Gym todos los dias')
    //   .then(updatedPhoto => {
    //     console.log('Foto actualizada:', updatedPhoto);
    //   })
    //   .catch(error => {
    //     console.error('Error al actualizar la foto:', error);
    //   });

    // Eliminar una foto de un usuario por su título
    // deletePhotoByUserAndTitle('luis Rodriguez', 'El Emperador')
    //   .then(deletedPhoto => {
    //     console.log('Foto eliminada:', deletedPhoto);
    //   })
    //   .catch(error => {
    //     console.error('Error al eliminar la foto:', error);
    //   });

//     // Eliminar todas las fotos de un usuario
//     deleteAllPhotosByUser('Juan')
//       .then(result => {
//         console.log('Fotos eliminadas:', result);
//       })
//       .catch(error => {
//         console.error('Error al eliminar las fotos del usuario:', error);
//       });
//   })
//   .catch(error => {
//     console.error('Error al conectar a MongoDB:', error);
  });
