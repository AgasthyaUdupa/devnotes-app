import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get('http://backend:5000/notes')
      .then(res => setNotes(res.data))
      .catch(err => console.error('Error fetching notes:', err));
  }, []);

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note, idx) => <li key={idx}>{note}</li>)}
      </ul>
    </div>
  );
}

export default App;
