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

        //check for the code snippet
        const code = screen.getByText(/for i in range(5)/i);
        expect(code).toBeInTheDocument();
    });

    test('render the While loop section', () => {

        const title = screen.getByText(/While Loop/i);
        expect(title).toBeInTheDocument();

        //check for the code snippet
        const code = screen.getByText(/while i < 10/i);
        expect(code).toBeInTheDocument();
    });

    test('contains and embedded Python compiler inframe', () => {
        const inframe = screen.getByTitle(/Python Compiler/i);
        expect(inframe).toBeInTheDocument();
        expect(inframe).toHaveAttribute('src', 'https://trinket.io/embed/python/c602fdf514fe');
    })

})