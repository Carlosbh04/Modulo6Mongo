const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  dateOfBirth: { type: Date },
  comments: { type: String },
  rol: { type: String }
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
