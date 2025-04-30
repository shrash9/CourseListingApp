const express = require('express');
const cors = require('cors');
const courses = require('../src/assets/courses.json');

const app = express();
app.use(cors());
app.use(express.json());

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
