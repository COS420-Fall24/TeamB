// src/tests/Quizzes.test.tsx
// Generated with AI

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Quizzes from '../components/Quizzes';

describe('Quizzes Component', () => {
  it('renders the quizzes page correctly', () => {
    render(<Quizzes />);
    
    // Check if the page heading is rendered
    expect(screen.getByText(/Quizzes/i)).toBeInTheDocument();

    // Check if the introductory text is rendered
    expect(
      screen.getByText(/Select a quiz below to test your coding knowledge:/i)
    ).toBeInTheDocument();

    // Check if all "Take Quiz" buttons are rendered
    const quizButtons = screen.getAllByRole('button', { name: /Take Quiz/i });
    expect(quizButtons.length).toBe(3); // Expecting 3 quizzes
  });

  it('renders quiz titles and descriptions correctly', () => {
    render(<Quizzes />);

    // Verify each quiz title and description is rendered
    expect(screen.getByText(/Quiz on Variables/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Test your understanding of variables in programming\./i)
    ).toBeInTheDocument();

    expect(screen.getByText(/Quiz on Data Types/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Check your knowledge of various data types\./i)
    ).toBeInTheDocument();

    expect(screen.getByText(/Quiz on Loops/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Challenge your knowledge of loops \(for, while\)\./i)
    ).toBeInTheDocument();
  });

  it('allows clicking a quiz button and triggers an action', () => {
    render(<Quizzes />);

    // Simulate clicking on the first "Take Quiz" button
    const quizButtons = screen.getAllByRole('button', { name: /Take Quiz/i });
    fireEvent.click(quizButtons[0]);

    // Since the component doesn't have routing or state change, no further assertions are needed.
    // Add routing or state-based tests as needed.
  });
});
