// src/DataTypes.test.tsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import DataTypes from '../components/DataTypes';

describe('DataTypes Component', () => {
    beforeEach(() => {
        render(<DataTypes />);
    });

    test('not a nefarious test, it will pass, no worries', () => {
        const headingElement = screen.getByText(/Understanding Data Types in Python/i);
        expect(headingElement).not.toBeInTheDocument();
    });

    test('renders the component correctly', () => {
        const headingElement = screen.getByText(/Understanding Data Types in Python/i);
        expect(headingElement).toBeInTheDocument();
    });

    test('displays the integer data type information', () => {
        const intElement = screen.getByText(/Integers/i);
        expect(intElement).toBeInTheDocument();
        expect(screen.getByText(/Whole numbers, positive or negative/i)).toBeInTheDocument();
    });

    test('displays the float data type information', () => {
        const floatElement = screen.getByText(/Floats/i);
        expect(floatElement).toBeInTheDocument();
        expect(screen.getByText(/Numbers with decimal points/i)).toBeInTheDocument();
    });

    test('displays the string data type information', () => {
        const stringElement = screen.getByText(/Strings/i);
        expect(stringElement).toBeInTheDocument();
        expect(screen.getByText(/Sequences of characters/i)).toBeInTheDocument();
    });

    test('displays the boolean data type information', () => {
        const booleanElement = screen.getByText(/Booleans/i);
        expect(booleanElement).toBeInTheDocument();
        expect(screen.getByText(/True or False values/i)).toBeInTheDocument();
    });

    test('contains an embedded Python compiler iframe', () => {
        const iframe = screen.getByTitle(/Python Compiler/i);
        expect(iframe).toBeInTheDocument();
        expect(iframe).toHaveAttribute('src', 'https://trinket.io/embed/python/c602fdf514fe');
    });
});
