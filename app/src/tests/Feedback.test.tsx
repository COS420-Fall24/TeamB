// src/tests/PersonalCodingAssistant.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PersonalCodingAssistant from '../components/Feedback';

describe('PersonalCodingAssistant Component', () => {
    it('renders the main heading correctly', () => {
        render(<PersonalCodingAssistant />);
        const heading = screen.getByRole('heading', { name: /Personal Coding Assistant/i });
        expect(heading).toBeInTheDocument();
    });

    it('renders the introductory paragraph', () => {
        render(<PersonalCodingAssistant />);
        const paragraph = screen.getByText(/Need help with coding\? Use the interactive chatbot below to get assistance or ask questions!/i);
        expect(paragraph).toBeInTheDocument();
    });

    it('renders the interactive chat heading', () => {
        render(<PersonalCodingAssistant />);
        const chatHeading = screen.getByRole('heading', { name: /Interactive Coding Chat/i });
        expect(chatHeading).toBeInTheDocument();
    });

    it('renders the chatbot iframe with correct attributes', () => {
        render(<PersonalCodingAssistant />);
        const iframe = screen.getByTitle('Coding Assistant Chatbot');
        expect(iframe).toBeInTheDocument();
        expect(iframe).toHaveAttribute('src', 'https://www.chatbase.co/chatbot-iframe/9YK6TrigVzwsAN6YqvxZO');
        expect(iframe).toHaveAttribute('width', '100%');
        expect(iframe).toHaveStyle('min-height: 700px');
    });

    it('applies the correct styling to the container', () => {
        render(<PersonalCodingAssistant />);
        const container = screen.getByRole('heading', { name: /Personal Coding Assistant/i }).closest('div');
        expect(container).toHaveStyle('padding: 20px');
        expect(container).toHaveStyle('font-family: Arial, sans-serif');
        expect(container).toHaveStyle('color: #fff');
    });
});
