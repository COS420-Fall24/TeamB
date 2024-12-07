//generated with AI

import React, { useState } from 'react';
import './InteractiveExercises.css';

interface Exercise {
    id: number;
    title: string;
    description: string;
    solution: string;  // Solution can be stored in different ways (e.g., for comparison)
    userSolution: string;
    isCompleted: boolean;
}

const InteractiveExercises = (): JSX.Element => {
    // Sample exercises
    const exercises: Exercise[] = [
        {
            id: 1,
            title: 'Variables',
            description: 'Write a program that stores a number in a variable and prints it.',
            solution: 'let x = 5;\nconsole.log(x);',
            userSolution: '',
            isCompleted: false
        },
        {
            id: 2,
            title: 'Loops',
            description: 'Create a loop that prints numbers from 1 to 10.',
            solution: 'for (let i = 1; i <= 10; i++) {\n  console.log(i);\n}',
            userSolution: '',
            isCompleted: false
        }
    ];

    const [userExercises, setUserExercises] = useState<Exercise[]>(exercises);

    // Handle solution input change
    const handleSolutionChange = (id: number, value: string) => {
        setUserExercises((prevExercises) =>
            prevExercises.map((exercise) =>
                exercise.id === id ? { ...exercise, userSolution: value } : exercise
            )
        );
    };

    // Handle solution submission
    const handleSubmitSolution = (id: number) => {
        setUserExercises((prevExercises) =>
            prevExercises.map((exercise) =>
                exercise.id === id
                    ? { ...exercise, isCompleted: exercise.userSolution === exercise.solution }
                    : exercise
            )
        );
    };

    return (
        <div className="interactive-exercises-container">
            <h1>Interactive Exercises</h1>

            {userExercises.map((exercise) => (
                <div key={exercise.id} className="exercise-card">
                    <h2>{exercise.title}</h2>
                    <p>{exercise.description}</p>

                    <textarea
                        placeholder="Write your solution here..."
                        value={exercise.userSolution}
                        onChange={(e) => handleSolutionChange(exercise.id, e.target.value)}
                        rows={6}
                        cols={50}
                    ></textarea>

                    <button onClick={() => handleSubmitSolution(exercise.id)} className="submit-button">
                        Submit Solution
                    </button>

                    {exercise.isCompleted ? (
                        <p className="success-message">Great job! You've completed this exercise.</p>
                    ) : (
                        <p className="error-message">Try again, or look for hints!</p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default InteractiveExercises;
