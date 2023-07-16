import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styes.scss'
const Javascript = () => {

   const [data, setData] = useState([])


  const [question, setQuestion] = useState({
    title: '',
    answer: '',
    description: '',
    category: '',

  });
  const categories = ['JavaScript', 'HTML', 'CSS', 'React', 'Others'];
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formIsValid = true;
    const newErrors = {};

    // Validate title
    if (!question.title.trim()) {
      formIsValid = false;
      newErrors.title = 'Title is required';
    }

    // Validate answer
    if (!question.answer.trim()) {
      formIsValid = false;
      newErrors.answer = 'Answer is required';
    }

    // Validate description
    if (!question.description.trim()) {
      formIsValid = false;
      newErrors.description = 'Description is required';
    }

    setErrors(newErrors);
    return formIsValid;
  };
  console.log(data);

  const handleChange = (e) => {
    setQuestion({ ...question, [e.target.name]: e.target.value });
  };
  const BaseURL = 'http://16.171.165.191:8100/' 
  // http://127.0.0.1:8200
  
  useEffect(() => {
    // Fetch questions from the backend API
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(`${BaseURL}/api/`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        await axios.post(`${BaseURL}/api/questions`, question);
        console.log('Question submitted successfully');
        setQuestion({ title: '', answer: '', description: '', category:''});
        setErrors({});
      } catch (err) {
        console.error('Failed to submit question:', err);
      }
    }
  };

  return  (
    <div className="containers">
      <h1>Upload a Question</h1>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label htmlFor="category">Category:</label>
          <select id="category" name="category" value={question.category} onChange={handleChange}>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={question.title}
            onChange={handleChange}
          />
          {errors.title && <span className="error">{errors.title}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="answer">Answer:</label>
          <textarea
            id="answer"
            name="answer"
            value={question.answer}
            onChange={handleChange}
          ></textarea>
          {errors.answer && <span className="error">{errors.answer}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="description">Code Snippet:</label>
          <textarea
            id="description"
            name="description"
            value={question.description}
            onChange={handleChange}
          ></textarea>
          {errors.description && (
            <span className="error">{errors.description}</span>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>


      <div>
      <h1>Questions</h1>
      {data.map((question, key) => (
        <div key={question._id} className="item">
          <h3 className='question'>{key+1}.{question.title}</h3>
          <div className='answers'>
            <p>{question.answer}</p>
            <div><pre><code>{question.description}</code></pre> </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Javascript;
