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

  const fetchMoodsForWeek = (endDate) => {
    if (!endDate) {
      setErrorMessage("Please select a date.");
      return;
    }

    const token = localStorage.getItem('access_token');
    if (!token) {
      setErrorMessage("Unauthorized: No token found");
      return;
    }

    // Calculate the start date (7 days before the end date)
    const startDate = new Date(endDate);
    startDate.setDate(startDate.getDate() - 6);

    axios.get(`http://localhost:8000/moods/range/?start=${startDate.toISOString().split('T')[0]}&end=${endDate}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      console.log('Fetched moods for the week:', response.data); // Log the fetched data
      setErrorMessage(""); // Clear any previous error messages
      setMoods(response.data);
    })
    .catch(error => {
      if (error.response && error.response.status === 401) {
        setErrorMessage("Unauthorized: Invalid token");
      } else {
        setErrorMessage("Error fetching moods for the week");
      }
      console.error('There was an error fetching the moods for the week!', error);
    });
  };

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const happinessCounts = moods.map(mood => {
    const dayIndex = new Date(mood.timestamp).getDay();
    return { day: daysOfWeek[dayIndex], mood: mood.mood };
  }).reduce((acc, { day, mood }) => {
    acc[day] = mood;
    return acc;
  }, { Sun: 0, Mon: 0, Tue: 0, Wed: 0, Thu: 0, Fri: 0, Sat: 0 });

  const data = {
    labels: daysOfWeek,
    datasets: [{
      label: 'Happiness Level',
      data: daysOfWeek.map(day => happinessCounts[day]),
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
      </div>
      <Line data={data} options={options} />
      <form className="date-form" onSubmit={(e) => {
        e.preventDefault();
        const day = e.target.elements.wellness.value;
        fetchMoodsForWeek(day);
      }}>
        <h2>Past Weeks</h2>
        <label htmlFor="wellness">Select Date:</label>
        <input type="date" id="wellness" name="wellness" />
        <input type="submit" value="Submit" />
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default WellnessHistory;