const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  title: String,
  answer: String,
  description: String,
  category: String,
});

const Questions = mongoose.model('Questions', questionSchema);

module.exports = Questions;