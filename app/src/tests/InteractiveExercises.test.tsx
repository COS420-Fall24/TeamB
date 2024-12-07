// src/components/InteractiveExercises.test.tsx
// generated with AI
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import InteractiveExercises from '../components/InteractiveExercises';

describe('InteractiveExercises', () => {
    // Test rendering of the exercises
    test('renders exercises correctly', () => {
        render(<InteractiveExercises />);

        // Check if the exercise title and description are rendered
        expect(screen.getByText(/Variables/)).toBeInTheDocument();
        expect(screen.getByText(/Write a program that stores a number in a variable/)).toBeInTheDocument();
        expect(screen.getByText(/Loops/)).toBeInTheDocument();
        expect(screen.getByText(/Create a loop that prints numbers from 1 to 10/)).toBeInTheDocument();
    });

    // Test user input in textarea
    test('user can type in the solution textarea', () => {
        render(<InteractiveExercises />);

        const textarea = screen.getByPlaceholderText(/Write your solution here.../);
        fireEvent.change(textarea, { target: { value: 'let x = 5;' } });

        expect(textarea).toHaveValue('let x = 5;');
    });

    // Test submitting a correct solution
    test('marks exercise as completed when the correct solution is entered', () => {
        render(<InteractiveExercises />);

        // Type the correct solution in the textarea
        const textarea = screen.getByPlaceholderText(/Write your solution here.../);
        fireEvent.change(textarea, { target: { value: 'let x = 5;\nconsole.log(x);' } });

        const submitButton = screen.getByText(/Submit Solution/);
        fireEvent.click(submitButton);

        expect(screen.getByText(/Great job! You've completed this exercise./)).toBeInTheDocument();
    });

    // Test submitting an incorrect solution
    test('shows error message when incorrect solution is entered', () => {
        render(<InteractiveExercises />);

        // Type an incorrect solution in the textarea
        const textarea = screen.getByPlaceholderText(/Write your solution here.../);
        fireEvent.change(textarea, { target: { value: 'let x = 10;' } });

        const submitButton = screen.getByText(/Submit Solution/);
        fireEvent.click(submitButton);

        expect(screen.getByText(/Try again, or look for hints!/)).toBeInTheDocument();
    });

    // Test if the correct solution is compared against the stored one (e.g., for loops)
    test('marks loops exercise as completed when the correct solution is entered', () => {
        render(<InteractiveExercises />);

        // Type the correct solution for loops
        const textarea = screen.getAllByPlaceholderText(/Write your solution here.../)[1]; // Second exercise
        fireEvent.change(textarea, { target: { value: 'for (let i = 1; i <= 10; i++) {\nconsole.log(i);\n}' } });

        const submitButton = screen.getAllByText(/Submit Solution/)[1]; // Second exercise
        fireEvent.click(submitButton);

        expect(screen.getAllByText(/Great job! You've completed this exercise./)[1]).toBeInTheDocument();
    });
});
