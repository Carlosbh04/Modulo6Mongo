// const mongoose = require('mongoose');
// const User = require('./models/user');
// const Profile = require('./models/profile');
// const Credentials = require('./models/credentials');

// Conectarse a la base de datos
// mongoose.connect('mongodb+srv://Codenotch:X29513321x%40@codenotch.m9tp7oo.mongodb.net/Credenciales', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('Conexión a MongoDB establecida');

//     // Crear un nuevo usuario
//     const newUser = new User({
//       login: 'usuario1',
//       password: 'contraseña1'
//     });

//     // Guardar el nuevo usuario en la base de datos
//     newUser.save()
//       .then(savedUser => {
//         console.log('Usuario guardado:', savedUser);
//         // Cerrar la conexión a la base de datos
//         mongoose.connection.close();
//       })
//       .catch(error => {
//         console.error('Error al guardar el usuario:', error);
//         // Cerrar la conexión a la base de datos
//         mongoose.connection.close();
//       });
//   })
//   .catch(error => {
//     console.error('Error al conectar a MongoDB:', error);


 
    // Crear un nuevo perfil
    // const newProfile = new Profile({
    //     name: 'Emilio',
    //     surname: 'Hernandez',
    //     dateOfBirth: '1980', // Solo se establece el año 2000 como una cadena de texto
    //     comments: 'soy venezolano',
    //     rol: 'User'
    //   });
      
    //   // Guardar el nuevo perfil en la base de datos
    //   newProfile.save()
    //     .then(savedProfile => {
    //       console.log('Año de nacimiento guardado:', savedProfile.dateOfBirth);
    //       // Cerrar la conexión a la base de datos
    //       mongoose.connection.close();
    //     })
    //     .catch(error => {
    //       console.error('Error al guardar el perfil:', error);
    //       // Cerrar la conexión a la base de datos
    //       mongoose.connection.close();
    //     });
      
      
      
     // Crear nuevas credenciales

//   const newCredentials = new Credentials({
//     address: 'Calle Mayor 76',
//     phone: '642978027',
//     email: 'Pedro8734@gmail.com'
//   });

//   // Guardar las nuevas credenciales en la base de datos
//   newCredentials.save()
//     .then(savedCredentials => {
//       console.log('Credenciales guardadas:', savedCredentials);
//       // Cerrar la conexión a la base de datos
//       mongoose.connection.close();
//     })
//     .catch(error => {
//       console.error('Error al guardar las credenciales:', error);
//       // Cerrar la conexión a la base de datos
//       mongoose.connection.close();
//     });
// })
// .catch(error => {
//   console.error('Error al conectar a MongoDB:', error);
// });

