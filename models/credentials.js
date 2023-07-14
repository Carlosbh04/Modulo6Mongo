const mongoose = require('mongoose');

const credentialsSchema = new mongoose.Schema({
  address: { type: String },
  phone: { type: String },
  email: { type: String }
});

const Credentials = mongoose.model('Credentials', credentialsSchema);

module.exports = Credentials;
