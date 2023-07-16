const express = require('express');
const router = express.Router();
const {getPhotos, createPhoto,updatePhoto, deletePhoto, deleteAllPhotos, Photos} = require('../controller/user.controller');

router.get('/',Photos);
router.get('/photos', getPhotos);
router.post('/photos', createPhoto);
router.put('/photos', updatePhoto);
router.delete('/photos', deletePhoto);
router.delete('/photos/user', deleteAllPhotos);

module.exports = router;
