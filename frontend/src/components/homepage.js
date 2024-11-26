// Create a function to build the dashboard dynamically
function createDashboard() {
    // Create container
    const container = document.createElement('div');
    container.classList.add('container');
  
    // Welcome message
    const welcomeMessage = document.createElement('h1');
    welcomeMessage.textContent = 'Welcome, Sarah';
    container.appendChild(welcomeMessage);
  
    // Appointments section
    const appointments = document.createElement('div');
    appointments.classList.add('appointments');
    const appointmentsTitle = document.createElement('h2');
    appointmentsTitle.textContent = 'Upcoming Appointments';
    appointments.appendChild(appointmentsTitle);
  
    const appointmentData = [
      { text: 'Therapy\n10/30/24, 10:00 AM @ Location' },
      { text: 'Peer Support Group\n10/30/24, 10:00 AM @ Location' },
      { text: 'Peer Support Group' }
    ];
  
    appointmentData.forEach(appointment => {
      const button = document.createElement('button');
      button.textContent = appointment.text;
      appointments.appendChild(button);
    });
    container.appendChild(appointments);
  
    // Mood section
    const moodSection = document.createElement('div');
    moodSection.classList.add('mood-section');
    const moodTitle = document.createElement('h2');
    moodTitle.textContent = 'How are you feeling today?';
    moodSection.appendChild(moodTitle);
  
    const moodDescription = document.createElement('p');
    moodDescription.textContent =
      'Rate your mood from 1 (very low) to 5 (very positive) for your own tracking—no right or wrong answers.';
    moodSection.appendChild(moodDescription);
  
    const moodOptions = document.createElement('div');
    moodOptions.classList.add('mood-options');
    for (let i = 1; i <= 5; i++) {
      const moodDiv = document.createElement('div');
      moodDiv.textContent = i;
      moodDiv.addEventListener('click', () => alert(`You selected mood: ${i}`));
      moodOptions.appendChild(moodDiv);
    }
    moodSection.appendChild(moodOptions);
    container.appendChild(moodSection);
  
    // Achievement section
    const achievementSection = document.createElement('div');
    achievementSection.classList.add('achievement-section');
    const achievementTitle = document.createElement('h2');
    achievementTitle.textContent = 'Daily Achievement';
    achievementSection.appendChild(achievementTitle);
  
    const achievementDescription = document.createElement('p');
    achievementDescription.textContent =
      'Every win counts. This is a place to celebrate any step you take on your journey—big or small.';
    achievementSection.appendChild(achievementDescription);
  
    const achievementTextarea = document.createElement('textarea');
    achievementTextarea.placeholder = 'Today I...';
    achievementSection.appendChild(achievementTextarea);
  
    const achievementIcon = document.createElement('div');
    achievementIcon.classList.add('achievement-icon');
    achievementIcon.textContent = '🎉';
    achievementIcon.addEventListener('click', () => alert('Celebrate your wins!'));
    achievementSection.appendChild(achievementIcon);
  
    container.appendChild(achievementSection);
  
    // Mind section
    const mindSection = document.createElement('div');
    mindSection.classList.add('mind-section');
    const mindTitle = document.createElement('h2');
    mindTitle.textContent = "What's on Your Mind?";
    mindSection.appendChild(mindTitle);
  
    const mindDescription = document.createElement('p');
    mindDescription.textContent =
      'Your thoughts and feelings matter. Write down anything that’s on your mind—for your eyes only.';
    mindSection.appendChild(mindDescription);
  
    const mindTextarea = document.createElement('textarea');
    mindTextarea.placeholder = 'Type Here';
    mindSection.appendChild(mindTextarea);
    container.appendChild(mindSection);
  
    // Submit button
    const submitButton = document.createElement('button');
    submitButton.classList.add('submit-btn');
    submitButton.textContent = 'Submit';
    submitButton.addEventListener('click', () => alert('Submission Successful!'));
    container.appendChild(submitButton);
  
    // Add container to body
    document.body.appendChild(container);
  }
  
  // Set up styles dynamically
  function addStyles() {
    const style = document.createElement('style');
    style.textContent = `
      body {
        font-family: Arial, sans-serif;
        background-color: #f8f8f8;
        margin: 0;
        padding: 0;
        color: #4c2d48;
      }
      .container {
        max-width: 900px;
        margin: 0 auto;
        padding: 20px;
        background: white;
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      }
      h1 {
        font-size: 24px;
        margin-bottom: 20px;
      }
      .appointments button {
        background-color: #8e597b;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 10px 20px;
        margin-right: 10px;
        font-size: 14px;
        cursor: pointer;
      }
      .appointments button:hover {
        background-color: #734b64;
      }
      .mood-options {
        display: flex;
        justify-content: space-between;
        background-color: #e6dce4;
        border-radius: 10px;
        padding: 15px;
      }
      .mood-options div {
        text-align: center;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #8e597b;
        color: white;
        font-size: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
      .mood-options div:hover {
        background-color: #734b64;
      }
      textarea {
        width: 100%;
        height: 60px;
        border: 2px solid #8e597b;
        border-radius: 5px;
        padding: 10px;
        font-size: 14px;
      }
      .achievement-icon {
        float: right;
        margin-top: -55px;
        font-size: 18px;
        color: #8e597b;
        cursor: pointer;
      }
      .submit-btn {
        display: block;
        background-color: #5e5e5e;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        margin: 0 auto;
      }
    `;
    document.head.appendChild(style);
  }
  
  // Initialize dashboard
  addStyles();
  createDashboard();
  

