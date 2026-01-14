require('express-async-errors');
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const notFound = require('./middleware/notFound');
const jobRoutes = require('./routes/jobs');
const authRoutes = require('./routes/auth');
const connectDB = require('./db/connect');
const errorHandler = require('./middleware/errorHandler');
const authenticate = require('./middleware/authenticate');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/jobs', authenticate, jobRoutes);

app.use(notFound);
app.use(errorHandler);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(5000, () => console.log('Server started...'));
  } catch (err) {
    console.log(err);
  }
};

start();
