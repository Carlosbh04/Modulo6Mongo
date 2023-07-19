const mongoose = require('mongoose');

const marksSchema = new mongoose.Schema({
  groupName: String,
  subjectName: String,
  markDate: { type: mongoose.Types.Decimal128 },
  studentFirstName: String,
  studentLastName: String,
  teacher: {
    firstName: String,
    lastName: String
  }
});

// Definir el modelo de Marks y asignarle la colección "marks"
const Marks = mongoose.model('Marks', marksSchema, 'marks');

// Conectarse a la base de datos
mongoose.connect('mongodb+srv://Codenotch:X29513321x%40@codenotch.m9tp7oo.mongodb.net/marks', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Conexión a MongoDB establecida');
    calculateAverageMark('Castilian')
      .then(averageMark => {
        console.log('Nota media de la asignatura "Castilian":', averageMark);
      })
      .catch(error => {
        console.error('Error:', error);
      });

    countTotalStudents()
      .then(totalStudents => {
        console.log('Número total de alumnos:', totalStudents);
      })
      .catch(error => {
        console.error('Error:', error);
      });

    listAllStudents()
      .then(students => {
        console.log('Lista de alumnos:', students);
      })
      .catch(error => {
        console.error('Error:', error);
      });

    listAllTeachers()
      .then(teachers => {
        console.log('Lista de profesores:', teachers);
      })
      .catch(error => {
        console.error('Error:', error);
      });

    countStudentsByGroup()
      .then(studentsByGroup => {
        console.log('Número de alumnos por grupo:', studentsByGroup);
      })
      .catch(error => {
        console.error('Error:', error);
      });

    getTopSubjects()
      .then(topSubjects => {
        console.log('Top 5 de asignaturas con nota media mayor que 5:', topSubjects);
      })
      .catch(error => {
        console.error('Error:', error);
      });

    countTeachersBySubject()
      .then(teachersBySubject => {
        console.log('Número de profesores por asignatura:', teachersBySubject);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  })
  .catch(error => {
    console.error('Error al conectar a MongoDB:', error);
  });

// Calcular la nota media de los alumnos de una asignatura concreta.
async function calculateAverageMark(subjectName) {
  try {
    const result = await Marks.aggregate([
      { $match: { subjectName } },
      { $group: { _id: null, averageMark: { $avg: "$markDate" } } }
    ]);

    if (result.length > 0) {
      return result[0].averageMark;
    } else {
      return 0;
    }
  } catch (error) {
    console.error('Error al calcular la nota media:', error);
    throw error;
  }
}

// Calcular el número total de alumnos que hay en el bootcamp incluyendo repetidos.
async function countTotalStudents() {
  try {
    const result = await Marks.aggregate([
      { $group: { _id: "$studentFirstName" } },
      { $count: "totalStudents" }
    ]);

    return result.length > 0 ? result[0].totalStudents : 0;
  } catch (error) {
    console.error('Error al contar el número total de alumnos:', error);
    throw error;
  }
}


// Listar el nombre y los apellidos de todos los alumnos incluyendo repetidos.
async function listAllStudents() {
  try {
    const result = await Marks.aggregate([
      { $project: { _id: 0, studentFirstName: 1, studentLastName: 1 } }
    ]);

    return result;
  } catch (error) {
    console.error('Error al obtener la lista de alumnos:', error);
    throw error;
  }
}


// Listar el nombre y los apellidos de todos los profesores incluyendo repetidos.
async function listAllTeachers() {
  try {
    const result = await Marks.aggregate([
      { $project: { _id: 0, teacher: 1 } }
    ]);

    return result;
  } catch (error) {
    console.error('Error al obtener la lista de profesores:', error);
    throw error;
  }
}


// Mostrar el número total de alumnos por grupo ordenados por grupo en orden inverso al alfabeto.
async function countStudentsByGroup() {
  try {
    const result = await Marks.aggregate([
      { $group: { _id: "$groupName", count: { $sum: 1 } } },
      { $sort: { _id: -1 } }
    ]);
    return result;
  } catch (error) {
    console.error('Error al contar los alumnos por grupo:', error);
    throw error;
  }
}

// Obtén el top 5 de los nombres de las asignaturas cuya nota media sea mayor que 5.
async function getTopSubjects() {
  try {
    const result = await Marks.aggregate([
      { $group: { _id: "$subjectName", averageMark: { $avg: "$markDate" } } },
      { $match: { averageMark: { $gt: 5 } } },
      { $sort: { averageMark: -1 } },
      { $limit: 5 },
      { $project: { _id: 0, subjectName: "$_id" } }
    ]);
    return result;
  } catch (error) {
    console.error('Error al obtener el top de asignaturas:', error);
    throw error;
  }
}

// Calcular el numero de profesores que hay por cada asignatura incluyendo repetidos.
async function countTeachersBySubject() {
  try {
    const result = await Marks.aggregate([
      { $unwind: "$teacher" },
      { $group: { _id: "$subjectName", count: { $sum: 1 } } }
    ]);
    return result;
  } catch (error) {
    console.error('Error al contar los profesores por asignatura:', error);
    throw error;
  }
}
