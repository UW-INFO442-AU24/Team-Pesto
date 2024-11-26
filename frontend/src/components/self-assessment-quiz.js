const body = document.body;

const quizContainer = document.createElement("div");
quizContainer.className = "self-assessment-quiz";
body.appendChild(quizContainer);

const title = document.createElement("h1");
title.textContent = "Take Your Self-Assessment!";
quizContainer.appendChild(title);

const description = document.createElement("p");
description.textContent = "Learn more here:";
quizContainer.appendChild(description);

const link = document.createElement("a");
link.href = "https://www.cope.org.au/health-professionals/health-professionals-3/calculating-score-epds/";
link.textContent = "The Edinburgh Postnatal Depression Scale (EPDS)";
quizContainer.appendChild(link);

//QUIZ
const quizForm = document.createElement("form");
quizForm.id = "epds-quiz";
quizContainer.appendChild(quizForm);


const questions = [
    {
        question: "1. I have been able to laugh and see the funny side of things:",
        options: [
            { text: "As much as I always could", value: 0 },
            { text: "Not quite so much now", value: 1 },
            { text: "Definitely not so much now", value: 2 },
            { text: "Not at all", value: 3 },
        ],
    },
    {
        question: "2. I have looked forward with enjoyment to things:",
        options: [
            { text: "As much as I ever did", value: 0 },
            { text: "Rather less than I used to", value: 1 },
            { text: "Definitely less than I used to", value: 2 },
            { text: "Hardly at all", value: 3 },
        ],
    },
    {
        question: "3. I have blamed myself unnecessarily when things went wrong:",
        options: [
            { text: "Yes, most of the time", value: 3 },
            { text: "Yes, some of the time", value: 2 },
            { text: "Not very often", value: 1 },
            { text: "No, never", value: 0 },
        ],
    },
    {
        question: "4. I have been anxious or worried for no good reason:",
        options: [
            { text: "No, not at all", value: 0 },
            { text: "Hardly ever", value: 1 },
            { text: "Yes, sometimes", value: 2 },
            { text: "Yes, very often", value: 3 },
        ],
    },
    {
        question: "5. I have felt scared or panicky for no good reason:",
        options: [
            { text: "Yes, quite a lot", value: 3 },
            { text: "Yes, sometimes", value: 2 },
            { text: "No, not much", value: 1 },
            { text: "No, not at all", value: 0 },
        ],
    },
    {
        question: "6. Things have been getting to me:",
        options: [
            { text: "Yes, most of the time I haven’t been able to cope at all", value: 3 },
            { text: "Yes, sometimes I haven’t been coping as well as usual", value: 2 },
            { text: "No, most of the time I have coped quite well", value: 1 },
            { text: "No, I have been coping as well as ever", value: 0 },
        ],
    },
    {
        question: "7. I have been so unhappy that I have had difficulty sleeping:",
        options: [
            { text: "Yes, most of the time", value: 3 },
            { text: "Yes, sometimes", value: 2 },
            { text: "No, not very often", value: 1 },
            { text: "No, not at all", value: 0 },
        ],
    },
    {
        question: "8. I have felt sad or miserable:",
        options: [
            { text: "Yes, most of the time", value: 3 },
            { text: "Yes, quite often", value: 2 },
            { text: "Not very often", value: 1 },
            { text: "No, not at all", value: 0 },
        ],
    },
    {
        question: "9. I have been so unhappy that I have been crying:",
        options: [
            { text: "Yes, most of the time", value: 3 },
            { text: "Yes, quite often", value: 2 },
            { text: "Only occasionally", value: 1 },
            { text: "No, never", value: 0 },
        ],
    },
    {
        question: "10. The thought of harming myself has occurred to me:",
        options: [
            { text: "Yes, quite often", value: 3 },
            { text: "Sometimes", value: 2 },
            { text: "Hardly ever", value: 1 },
            { text: "Never", value: 0 },
        ],
    },
];

questions.forEach((q, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.className = "quiz-question";

    const questionText = document.createElement("p");
    questionText.textContent = q.question;
    questionDiv.appendChild(questionText);

    const optionsDiv = document.createElement("div");
    optionsDiv.className = "quiz-options";

    q.options.forEach((option) => {
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = `q${index + 1}`;
        input.value = option.value;
        input.required = true;

        label.appendChild(input);
        label.append(option.text);
        optionsDiv.appendChild(label);
    });

    questionDiv.appendChild(optionsDiv);
    quizForm.appendChild(questionDiv);
});

//submit
const submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.textContent = "Submit";
quizForm.appendChild(submitButton);


const resultText = document.createElement("p");
resultText.id = "quiz-result";
quizContainer.appendChild(resultText);


quizForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(quizForm);
    let score = 0;

    for (let [key, value] of formData.entries()) {
        score += parseInt(value);
    }

    if (score > 10) {
        resultText.textContent =
            "Your score suggests you may be experiencing symptoms of postpartum depression. Please contact a healthcare professional.";
        resultText.style.color = "red";
    } else {
        resultText.textContent =
            "Your score is within the normal range. If you have concerns, consult a healthcare provider.";
        resultText.style.color = "green";
    }
});

// styling
const style = document.createElement("style");
style.textContent = `
  .self-assessment-quiz {
    font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 20px auto;
    padding: 30px;
    max-width: 700px;
    color: #333;
    background-color: #f7f5f9;
    border-radius: 10px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  }
  .self-assessment-quiz h1 {
    font-size: 2em;
    color: #7A5A72;
    text-align: center;
    margin-bottom: 20px;
  }
  #epds-quiz {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .quiz-question {
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #ffffff;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
    margin-bottom: 15px;
  }
  .quiz-question p {
    font-size: 1.1em;
    font-weight: bold;
    margin-bottom: 10px;
    color: #5A4A5E;
  }
  .quiz-options {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
document.head.appendChild(style);
