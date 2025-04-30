const express = require('express');
const cors = require('cors');
const courses = require('../src/assets/courses.json');

const app = express();
app.use(cors());
app.use(express.json());

const users = [];

app.post('/api/check-user-exists', (req, res) => {
  const { email } = req.body;
  const user = users.find(u => u.email === email);
  
  if (user) {
    return res.status(400).json({ message: 'User already exists' });
  }
  res.status(200).json({ message: 'User does not exist' });
});

app.post('/api/register', (req, res) => {
  const { fullName, email, password } = req.body;
  const existingUser = users.find(u => u.email === email);

  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const newUser = { fullName, email, password };
  users.push(newUser);

  console.log('New user added:', newUser); 

  res.status(201).json({ message: 'User registered successfully' });
});



app.get('/api/courses', (req, res) => {
  res.json(courses);
});

app.get('/api/courses/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const course = courses.find(c => c.id === id);
  if (!course) return res.status(404).json({ message: 'Course not found' });
  res.json(course);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`API listening on http://localhost:${PORT}`));
