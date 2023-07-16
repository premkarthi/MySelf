const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const path = require('path')
const app = express();
const port = process.env.DEV_PORT || 3100;
const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://Premkarz:IncrqG3HmpCZqylF@myself.k6xjgsg.mongodb.net/';
console.log(mongoURI);
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

app.post(`/api/questions`, async (req, res) => {
  try {
    const { title, answer, description, category } = req.body;
    const question = new Question({ title, answer, description, category });
    await question.save();
    res.status(201).json(question);
  } catch (err) {
    res.status(500).json({ error: 'Failed to save question' });
  }
});

app.get(`/api/`, async (req, res) => {
    try {
      const questions = await Question.find();
      res.json(questions);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch questions' });
    }
  });
  
  

if(process.env.STATUS === 'prod'){
  app.use(express.static(path.join(__dirname, '../frontend/build')));
  app.get('*', (req, res)=>{
    res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'))
  })
}


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
