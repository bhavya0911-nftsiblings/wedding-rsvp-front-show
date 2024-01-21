import './App.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { server } from './main.jsx';

function App() {
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    axios.get(`${server}/read`)
      .then(response => {
        console.log(response.data.data)
        setGuests(response.data.data)
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Guest List</h2>
      <ul>
        {guests.map((guest) => (
          <li key={guest._id}>
            {guest.name} - Food Preference: {guest.food_pref}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App
