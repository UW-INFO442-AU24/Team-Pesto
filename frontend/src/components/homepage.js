import axios from 'axios';
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

  useEffect(() => {
    axios.get('http://localhost:8000/moods/')
      .then(response => {
        setMoods(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the moods!', error);
      });
  }, []);

  return (
    <div className="mood-section">
      <h2>How are you feeling today?</h2>
      <p>Rate your mood from 1 (very low) to 5 (very positive) for your own tracking—no right or wrong answers.</p>
      <div className="mood-options">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>
      <h3>Previous Moods</h3>
      <div className="previous-moods">
        {moods.map(mood => (
          <div key={mood.id}>Mood: {mood.rating}</div>
        ))}
      </div>
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
const homepage = () => {
  return (
    <div className="container">
      <h1>Welcome, Sarah</h1>

      <Appointments />
      <MoodSection />
      <AchievementSection />
      <MindSection />

      <button className="submit-btn">Submit</button>
    </div>
  );
};

export default homepage;
