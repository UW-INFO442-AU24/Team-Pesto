import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const WellnessHistory = () => {
  const [moods, setMoods] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem('access_token'); // Retrieve the token from local storage
    if (!token) {
      setErrorMessage("Unauthorized: No token found");
      return;
    }

    axios.get('http://localhost:8000/moods/latest_week/', { // Fetch latest moods for the past week
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      console.log('Fetched moods:', response.data); // Log the fetched data
      setMoods(response.data);
    })
    .catch(error => {
      if (error.response && error.response.status === 401) {
        setErrorMessage("Unauthorized: Invalid token");
      } else {
        setErrorMessage("Error fetching moods");
      }
      console.error('There was an error fetching the moods!', error);
    });
  }, []);

  const fetchLatestMoodForDay = (day) => {
    const token = localStorage.getItem('access_token');
    if (!token) {
      setErrorMessage("Unauthorized: No token found");
      return;
    }

    axios.get(`http://localhost:8000/moods/latest/?day=${day}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      console.log('Fetched mood for the day:', response.data); // Log the fetched data
      if (!response.data) {
        setErrorMessage("No mood found for this day");
      } else {
        setErrorMessage(""); // Clear any previous error messages
        // Update the state with the fetched mood
        setMoods(prevMoods => {
          const updatedMoods = prevMoods.map(mood => {
            if (new Date(mood.timestamp).toISOString().split('T')[0] === day) {
              return response.data;
            }
            return mood;
          });
          return updatedMoods;
        });
      }
    })
    .catch(error => {
      if (error.response && error.response.status === 401) {
        setErrorMessage("Unauthorized: Invalid token");
      } else if (error.response && error.response.status === 404) {
        setErrorMessage("No mood found for this day");
      } else {
        setErrorMessage("Error fetching latest mood for the day");
      }
      console.error('There was an error fetching the latest mood for the day!', error);
    });
  };

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const happinessCounts = daysOfWeek.map((day, index) => {
    const mood = moods.find(mood => new Date(mood.timestamp).getDay() === index);
    console.log(`Mood for ${day}:`, mood); // Log the mood for each day
    return mood ? mood.mood : 0; // Default to 0 if no mood is found for the day
  });

  const data = {
    labels: daysOfWeek,
    datasets: [{
      label: 'Happiness Level',
      data: happinessCounts,
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      pointBackgroundColor: 'rgba(54, 162, 235, 1)',
      pointBorderColor: 'rgba(54, 162, 235, 1)',
      pointRadius: 5,
      fill: false
    }]
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        min: 1, // Set minimum of y-axis to 1
        max: 5, // Set maximum of y-axis to 5
        ticks: {
          stepSize: 1 // Increment by 1 for each tick
        }
      }
    }
  };

  return (
    <div>
      <div className="intro">
        <h1>Wellness History</h1>
        <p>Take a look at your progress!</p>
        <h2>This Week</h2>
      </div>
      <Line data={data} options={options} />
      <form onSubmit={(e) => {
        e.preventDefault();
        const day = e.target.elements.wellness.value;
        fetchLatestMoodForDay(day);
      }}>
        <h2>Past Weeks</h2>
        <label htmlFor="wellness">Select Date:</label>
        <input type="date" id="wellness" name="wellness" />
        <input type="submit" />
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default WellnessHistory;