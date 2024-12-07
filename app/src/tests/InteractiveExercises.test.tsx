// src/components/InteractiveExercises.test.tsx
// generated with AI
import React from 'react';
import { render, screen } from '@testing-library/react';
import ProgressTracking from '../components/ProgressTracking'; // Adjust the import based on your file structure

describe('ProgressTracking Component', () => {
    test('renders Progress Tracking page', () => {
        render(<ProgressTracking />);

        // Check if the heading is displayed
        expect(screen.getByRole('heading', { name: /Progress Tracking/i })).toBeInTheDocument();

        // Check the progress for each course
        const progressBars = screen.getAllByRole('progressbar');
        expect(progressBars.length).toBe(4); // Four courses with progress bars

        // Check if each progress bar has the correct progress
        const expectedProgress = [50, 75, 20, 90];
        progressBars.forEach((bar, index) => {
            expect(bar).toHaveAttribute('aria-valuenow', expectedProgress[index].toString());
        });
    });
});

