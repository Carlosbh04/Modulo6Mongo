const express = require('express');
const cors = require('cors');
const app = express();
const userRouter = require('./routers/user.routers');
const errorHandler = require('./error/errorHandling');

app.use(express.json());
app.use(cors());
app.use('/api', userRouter);
app.use(errorHandler);

module.exports = app;
