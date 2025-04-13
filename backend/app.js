const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const FILE = './notes.json';

// Load notes
app.get('/notes', (req, res) => {
  fs.readFile(FILE, 'utf8', (err, data) => {
    if (err) return res.status(500).send('Error reading notes');
    res.json(JSON.parse(data || '[]'));
  });
});

// Save note
app.post('/notes', (req, res) => {
  const newNote = req.body;
  fs.readFile(FILE, 'utf8', (err, data) => {
    const notes = JSON.parse(data || '[]');
    notes.push(newNote);
    fs.writeFile(FILE, JSON.stringify(notes), () => {
      res.status(201).json({ message: 'Note added' });
    });
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
