const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Ruta para crear un nuevo usuario
router.post('/', async (req, res) => {
  try {
    const { login, password } = req.body;
    const newUser = new User({ login, password });
    await newUser.save();
    res.status(201).json({ message: 'Usuario creado exitosamente' });
  } catch (error) {
    console.error('Error al crear el usuario:', error);
    res.status(500).json({ message: 'Error al crear el usuario' });
  }
});

module.exports = router;
