const express = require('express');
const Route = require('./routes/route');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the cors middleware

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use cors middleware
app.use(cors());

const dbURI = 'mongodb+srv://data:1234@cluster0.j0caazh.mongodb.net/';
mongoose
  .connect(dbURI)
  .then(() => {
    app.listen(4000);
    console.log('Connected to the database');
  })
  .catch((err) => {
    console.error(err);
  });

// routes
app.use('/api/', Route);
