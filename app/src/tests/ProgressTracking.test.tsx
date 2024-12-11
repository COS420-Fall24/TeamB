// src/tests/progressTracking.test.tsx
// generated with AI

import React from 'react';
import { render, screen } from '@testing-library/react';
import ProgressTracking from '../components/ProgressTracking';

// Mock the CSS modules to avoid errors in tests
jest.mock('../components/ProgressTracking.module.css', () => ({
    progressTracking: 'progressTracking',
    progressItem: 'progressItem',
    progressBarContainer: 'progressBarContainer',
    progressBar: 'progressBar',
}));

describe('ProgressTracking Component', () => {
    test('renders Progress Tracking page', () => {
        render(<ProgressTracking />);

        // Check if the title and progress data are rendered correctly
        expect(screen.getByText(/Progress Tracking/)).toBeInTheDocument();
        expect(screen.getByText(/Track your progress through your courses below/)).toBeInTheDocument();
        
        // Check the progress for each course
        const progressBars = screen.getAllByRole('progressbar');
        expect(progressBars.length).toBe(4);  // Four courses with progress bars

        // Check if each course name is rendered
        expect(screen.getByText(/Variables/)).toBeInTheDocument();
        expect(screen.getByText(/Data Types/)).toBeInTheDocument();
        expect(screen.getByText(/Loops/)).toBeInTheDocument();
        expect(screen.getByText(/Functions/)).toBeInTheDocument();
    });

    test('displays the correct progress percentage for each course', () => {
        render(<ProgressTracking />);

        // Check the progress percentages for each course
        expect(screen.getByText(/50% Completed/)).toBeInTheDocument();
        expect(screen.getByText(/75% Completed/)).toBeInTheDocument();
        expect(screen.getByText(/20% Completed/)).toBeInTheDocument();
        expect(screen.getByText(/90% Completed/)).toBeInTheDocument();
    });
});
