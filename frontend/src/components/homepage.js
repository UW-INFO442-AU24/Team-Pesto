import axios from 'axios';
import WellnessHistory from './wellness_history';
import React, { useState, useEffect } from 'react';

// Appointments Component
const Appointments = () => {
  return (
    <div className="appointments">
      <h2>Upcoming Appointments</h2>
      <button>Therapy<br />10/30/24, 10:00 AM @ Location</button>
      <button>Peer Support Group<br />10/30/24, 10:00 AM @ Location</button>
      <button>Peer Support Group</button>
    </div>
  );
};

// Mood Section Component
const MoodSection = () => {
  const [moods, setMoods] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem('access_token'); // Retrieve the token from local storage
    if (!token) {
      setErrorMessage("Unauthorized: No token found");
      return;
    }

    axios.get('http://localhost:8000/moods/?limit=5', { // Add limit query parameter
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
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

  const handleMoodClick = (moodValue) => {
    const token = localStorage.getItem('access_token');
    if (!token) {
      setErrorMessage("Unauthorized: No token found");
      return;
    }

    axios.post('http://localhost:8000/moods/', { mood: moodValue }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      setMoods([response.data, ...moods].slice(0, 5)); // Add new mood and limit to 5
    })
    .catch(error => {
      if (error.response && error.response.status === 401) {
        setErrorMessage("Unauthorized: Invalid token");
      } else {
        setErrorMessage("Error adding mood");
      }
      console.error('There was an error adding the mood!', error);
    });
  };

  return (
    <div className="mood-section">
      <h2>How are you feeling today?</h2>
      <p>Rate your mood from 1 (very low) to 5 (very positive) for your own tracking—no right or wrong answers.</p>
      <div className="mood-options">
        {[1, 2, 3, 4, 5].map(value => (
          <div
            key={value}
            className="mood-option"
            onClick={() => handleMoodClick(value)}
          >
            {value}
          </div>
        ))}
      </div>
      <h3>Previous Moods</h3>
      <div className="previous-moods">
        {moods.map(mood => (
          <div key={mood.id} className="mood-item">
            Mood: {mood.mood} <br />
            Date: {new Date(mood.timestamp).toLocaleDateString()}
          </div>
        ))}
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

// Achievement Section Component
const AchievementSection = () => {
  return (
    <div className="achievement-section">
      <h2>Daily Achievement</h2>
      <p>Every win counts. This is a place to celebrate any step you take on your journey—big or small.</p>
      <textarea placeholder="Today I..."></textarea>
      <div className="achievement-icon">🎉</div>
    </div>
  );
};

// Mind Section Component
const MindSection = () => {
  return (
    <div className="mind-section">
      <h2>What's on Your Mind?</h2>
      <p>Your thoughts and feelings matter. Write down anything that’s on your mind—for your eyes only.</p>
      <textarea placeholder="Type Here"></textarea>
    </div>
  );
};

// Main Dashboard Component
const Homepage = () => {
  const [userName, setUserName] = useState('Sarah'); // Default name

  useEffect(() => {
    const token = localStorage.getItem('access_token'); // Retrieve the token from local storage
    if (!token) {
      console.error("Unauthorized: No token found");
      return;
    }

    axios.get('http://localhost:8000/users/me/', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      setUserName(response.data.full_name); // Assuming the response contains a 'fullName' field
    })
    .catch(error => {
      console.error('There was an error fetching the user details!', error);
    });
  }, []);

  return (
    <div className="container">
      <h1>Welcome, {userName}</h1>

      <Appointments />
      <MoodSection />
      <AchievementSection />
      <MindSection />
      <WellnessHistory />

      <button className="submit-btn">Submit</button>
    </div>
  );
};

export default Homepage;