const mongoose = require('mongoose');


const marksSchema = new mongoose.Schema({
  groupName: String,
  subjectName: String,
  markDate: { type: mongoose.Types.Decimal128 },
  studentFirstName: String,
  studentLastName: String,
  teacher: {
    id: { type: mongoose.Schema.Types.ObjectId, required: true },
    firstName: String,
    lastName: String
  }
});


const Marks = mongoose.model('Marks', marksSchema, 'marks');


mongoose.connect('mongodb+srv://Codenotch:X29513321x%40@codenotch.m9tp7oo.mongodb.net/marks', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Conexión a MongoDB establecida');

  const document1 = new Marks({
    groupName: 'Group D',
    subjectName: 'physical education',
    markDate: 9.2,
    studentFirstName: 'Ana',
    studentLastName: 'Garcia',
    teacher: { id: new mongoose.Types.ObjectId(), firstName: 'Antonio', lastName: 'Sanchez' }
  });

  const document2 = new Marks({
    groupName: 'Group D',
    subjectName: 'Castilian',
    markDate: 9.9,
    studentFirstName: 'Miguel',
    studentLastName: 'Torres',
    teacher: { id: new mongoose.Types.ObjectId(), firstName: 'Laura', lastName: 'Martinez' }
  });

  document1.teachers = document1.teacher;
  delete document1.teacher;

  document2.teachers = document2.teacher;
  delete document2.teacher;

 
  document1.save()
    .then(savedDocument => {
      console.log('Documento guardado:', savedDocument);
    })
    .catch(error => {
      console.error('Error al guardar el documento:', error);
    });

  document2.save()
    .then(savedDocument => {
      console.log('Documento guardado:', savedDocument);
    })
    .catch(error => {
      console.error('Error al guardar el documento:', error);
    });


})
.catch(error => {
  console.error('Error al conectar a MongoDB:', error);
});
