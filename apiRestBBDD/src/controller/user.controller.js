const Photo = require('../model/user');


const Photos= async (req, res) => {
    try {
      const photos = await Photo.find();
      res.json(photos);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  

// GET /photos
const getPhotos = async (req, res) => {
  try {
    const user = req.query.user;
    const photos = await Photo.find({ user });
    res.json(photos);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// POST /photos
const createPhoto = async (req, res) => {
    try {
      const { user, url, title, description } = req.body;
      const photo = new Photo({ user, url, title, description });
      await photo.save();
      res.json({ message: 'Photo saved successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
// PUT /photos
const updatePhoto = async (req, res) => {
    try {
      const { title, description } = req.body;
      await Photo.updateMany({ title }, { description });
      res.json({ message: 'Photo description updated successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
// DELETE /photos
const deletePhoto = async (req, res) => {
    try {
      const { user, title } = req.body;
      await Photo.deleteOne({ user, title });
      res.json({ message: 'Photo deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  

// DELETE /photos/user
const deleteAllPhotos = async (req, res) => {
    try {
      const { user } = req.body;
      const result = await Photo.deleteMany({ user });
      const deletedCount = result.deletedCount;
      res.json({ message: `All user photos deleted successfully (${deletedCount} photos deleted)` });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  

module.exports = {
  getPhotos,
  createPhoto,
  updatePhoto,
  deletePhoto,
  deleteAllPhotos,
  Photos,
};
