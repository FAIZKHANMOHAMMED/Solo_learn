const mongoose = require('mongoose');
const JsonModel = require('./models/jsonModel');
const fs = require('fs');

const mongoURI = 'mongodb+srv://<admin>:<faiz123>@cluster0.wfk8j.mongodb.net/';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

const jsonFilePath = './data/data.json';
fs.readFile(jsonFilePath, 'utf8', async (err, data) => {
  if (err) {
    console.error('Error reading JSON file:', err);
    process.exit(1);
  }
  try {
    const jsonData = JSON.parse(data);
    await JsonModel.create(jsonData);
    console.log('JSON data stored successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error storing JSON data:', error);
    process.exit(1);
  }
});
