const express = require('express');
const app = express();
const port = process.env.PORT || 8200;
const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017';
var cors = require('cors')

app.use(cors())
app.use(express.json());

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));



const Question = require('./models/Questions');

app.post('/api/questions', async (req, res) => {
  try {
    const { title, answer, description, category } = req.body;
    const question = new Question({ title, answer, description, category });
    await question.save();
    res.status(201).json(question);
  } catch (err) {
    res.status(500).json({ error: 'Failed to save question' });
  }
});

app.get('/api/', async (req, res) => {
    try {
      const questions = await Question.find();
      res.json(questions);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch questions' });
    }
  });
  
  
// Your API routes will go here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
