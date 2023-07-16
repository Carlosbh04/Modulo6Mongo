const mongoose = require('mongoose');
const app = require('./app');
const { MONGO_URI } = require('./database');

// Conectar a la base de datos
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  
  
  .then(() => {
    console.log('Connected to the database');
    // Iniciar el servidor
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((error) => console.error('Error connecting to the database:', error));
