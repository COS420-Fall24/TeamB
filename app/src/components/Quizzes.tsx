// src/components/Quizzes.tsx
// generated with AI

import React from 'react';

const Quizzes: React.FC = () => {
  const quizzes = [
    { id: 1, title: 'Quiz on Variables', description: 'Test your understanding of variables in programming.' },
    { id: 2, title: 'Quiz on Data Types', description: 'Check your knowledge of various data types.' },
    { id: 3, title: 'Quiz on Loops', description: 'Challenge your knowledge of loops (for, while).' },
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', color: '#fff' }}>
      <h1>Quizzes</h1>
      <p>Select a quiz below to test your coding knowledge:</p>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {quizzes.map((quiz) => (
          <li key={quiz.id} style={{ marginBottom: '20px', borderBottom: '1px solid #fff', paddingBottom: '10px' }}>
            <h3>{quiz.title}</h3>
            <p>{quiz.description}</p>
            <button style={{ backgroundColor: '#00aced', color: '#fff', padding: '10px 20px', border: 'none', cursor: 'pointer' }}>
              Take Quiz
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quizzes;
