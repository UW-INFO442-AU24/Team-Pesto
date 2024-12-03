import React, { useState } from 'react';

const EPDSQuiz = () => {
  const [formData, setFormData] = useState({});
  const [result, setResult] = useState(null);

  const questions = [
    {
      id: 'q1',
      text: 'I have been able to laugh and see the funny side of things:',
      options: [
        { label: 'As much as I always could', value: 0 },
        { label: 'Not quite so much now', value: 1 },
        { label: 'Definitely not so much now', value: 2 },
        { label: 'Not at all', value: 3 },
      ],
    },
    {
      id: 'q2',
      text: 'I have looked forward with enjoyment to things:',
      options: [
        { label: 'As much as I ever did', value: 0 },
        { label: 'Rather less than I used to', value: 1 },
        { label: 'Definitely less than I used to', value: 2 },
        { label: 'Hardly at all', value: 3 },
      ],
    },
    {
      id: 'q3',
      text: 'I have blamed myself unnecessarily when things went wrong:',
      options: [
        { label: 'Yes, most of the time', value: 3 },
        { label: 'Yes, some of the time', value: 2 },
        { label: 'Not very often', value: 1 },
        { label: 'No, never', value: 0 },
      ],
    },
    {
      id: 'q4',
      text: 'I have been anxious or worried for no good reason:',
      options: [
        { label: 'No, not at all', value: 0 },
        { label: 'Hardly ever', value: 1 },
        { label: 'Yes, sometimes', value: 2 },
        { label: 'Yes, very often', value: 3 },
      ],
    },
    {
      id: 'q5',
      text: 'I have felt scared or panicky for no good reason:',
      options: [
        { label: 'Yes, quite a lot', value: 3 },
        { label: 'Yes, sometimes', value: 2 },
        { label: 'No, not much', value: 1 },
        { label: 'No, not at all', value: 0 },
      ],
    },
    {
      id: 'q6',
      text: 'Things have been getting to me:',
      options: [
        { label: 'Yes, most of the time I haven’t been able to cope at all', value: 3 },
        { label: 'Yes, sometimes I haven’t been coping as well as usual', value: 2 },
        { label: 'No, most of the time I have coped quite well', value: 1 },
        { label: 'No, I have been coping as well as ever', value: 0 },
      ],
    },
    {
      id: 'q7',
      text: 'I have been so unhappy that I have had difficulty sleeping:',
      options: [
        { label: 'Yes, most of the time', value: 3 },
        { label: 'Yes, sometimes', value: 2 },
        { label: 'No, not very often', value: 1 },
        { label: 'No, not at all', value: 0 },
      ],
    },
    {
      id: 'q8',
      text: 'I have felt sad or miserable:',
      options: [
        { label: 'Yes, most of the time', value: 3 },
        { label: 'Yes, quite often', value: 2 },
        { label: 'Not very often', value: 1 },
        { label: 'No, not at all', value: 0 },
      ],
    },
    {
      id: 'q9',
      text: 'I have been so unhappy that I have been crying:',
      options: [
        { label: 'Yes, most of the time', value: 3 },
        { label: 'Yes, quite often', value: 2 },
        { label: 'Only occasionally', value: 1 },
        { label: 'No, never', value: 0 },
      ],
    },
    {
      id: 'q10',
      text: 'The thought of harming myself has occurred to me:',
      options: [
        { label: 'Yes, quite often', value: 3 },
        { label: 'Sometimes', value: 2 },
        { label: 'Hardly ever', value: 1 },
        { label: 'Never', value: 0 },
      ],
    },
  ];

  const handleInputChange = (questionId, value) => {
    setFormData((prev) => ({ ...prev, [questionId]: parseInt(value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const score = Object.values(formData).reduce((sum, val) => sum + val, 0);

    if (score > 10) {
      setResult({
        message:
          'Your score suggests you may be experiencing symptoms of postpartum depression. Please contact a healthcare professional.',
        color: 'red',
      });
    } else {
      setResult({
        message:
          'Your score is within the normal range. If you have concerns, consult a healthcare provider.',
        color: 'green',
      });
    }
  };

  return (
    <div className="self-assessment-quiz">
      <h1>Take Your Self-Assessment!</h1>
      <p>
        Learn more here:{' '}
        <a
          href="https://www.cope.org.au/health-professionals/health-professionals-3/calculating-score-epds/"
          target="_blank"
          rel="noopener noreferrer"
        >
          The Edinburgh Postnatal Depression Scale (EPDS)
        </a>
      </p>
      <form onSubmit={handleSubmit}>
        {questions.map((question) => (
          <div key={question.id} className="quiz-question">
            <p>{question.text}</p>
            <div className="quiz-options">
              {question.options.map((option, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    name={question.id}
                    value={option.value}
                    required
                    onChange={() =>
                      handleInputChange(question.id, option.value)
                    }
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
      {result && (
        <p style={{ color: result.color, marginTop: '20px' }}>{result.message}</p>
      )}
    </div>
  );
};

export default EPDSQuiz;
