// src/Loops.test.tsx

import React from 'react';
import {render, screen} from '@testing-library/react';
import Loops from '../components/Loops'

describe('Loops', () => {
    beforeEach(() => {
        render(<Loops />)
    });

    test('render the Loops component', () => {
        
        const title = screen.getByText(/Loops in python/i)
        expect(title).toBeInTheDocument();
    })

    test('redner the For loop section', () => {

        const title = screen.getByText(/For Loop/i);
        expect(title).toBeInTheDocument();
    });



})