const mongoose = require('mongoose');

const marksSchema = new mongoose.Schema({
  teachers: [
    {
      id: { type: mongoose.Schema.Types.ObjectId, required: true },
      firstName: String,
      lastName: String
    }
  ],
  groupName: String,
  subjectName: String,
  markDate: { type: mongoose.Types.Decimal128 },
  studentFirstName: String,
  studentLastName: String
});

const Marks = mongoose.model('Marks', marksSchema);

module.exports = Marks;
