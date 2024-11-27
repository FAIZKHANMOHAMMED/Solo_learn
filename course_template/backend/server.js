const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const JsonModel = require('./models/jsonModel'); 

const app = express();
const PORT = 5500;

app.use(cors());
app.use(express.json());

const mongoURI = 'mongodb+srv://admin:FAIZ123@cluster0.wfk8j.mongodb.net/course_template';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

app.get('/jsondata', async (req, res) => {
  try {
    const data = await JsonModel.find(); 
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data' });
  }
});

app.post('/storejson', async (req, res) => {
  try {
    const jsonData = new JsonModel(req.body); 
    await jsonData.save(); 
    res.json({ message: 'Data stored successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error storing data' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
