import './App.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { server } from './main.jsx';

function App() {
  const [rsvp, setRsvp] = useState([]);
  const [nonRsvp, setNonRsvp] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    axios.get(`${server}/read`, {
      headers: {
          "Content-Type": "application/json"
      },
      withCredentials: true,
  })
      .then(response => {
        console.log(response.data)
        setRsvp(response.data.rsvp)
        setNonRsvp(response.data.nonRsvp)
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Guest List</h2>
      <h3>RSVP - Yes</h3>
      <ul>
        {rsvp.map((rsvp) => (
          <li key={rsvp._id}>
            {rsvp.name}
          </li>
        ))}
      </ul>
      <h3>RSVP - NO</h3>
      <ul>
        {nonRsvp.map((nonRsvp) => (
          <li key={nonRsvp._id}>
            {nonRsvp.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App
