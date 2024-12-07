import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Feedback from '../components/Feedback';

describe('Feedback Component', () => {
    it('renders the heading correctly', () => {
        render(<Feedback />);
        const heading = screen.getByText(/Feedback/i);
        expect(heading).toBeInTheDocument();
    });

    it('renders the feedback description paragraph', () => {
        render(<Feedback />);
        const paragraph = screen.getByText(/We value your feedback. Please use the interactive chatbot below to ask questions or provide suggestions./i);
        expect(paragraph).toBeInTheDocument();
    });

    it('renders the interactive chat heading', () => {
        render(<Feedback />);
        const chatHeading = screen.getByText(/Interactive Chat/i);
        expect(chatHeading).toBeInTheDocument();
    });

    it('renders the chatbot iframe', () => {
        render(<Feedback />);
        const iframe = screen.getByTitle('Interactive Chatbot');
        expect(iframe).toBeInTheDocument();
        expect(iframe).toHaveAttribute('src', 'https://www.chatbase.co/chatbot-iframe/9YK6TrigVzwsAN6YqvxZO');
        expect(iframe).toHaveAttribute('width', '100%');
        expect(iframe).toHaveStyle('minHeight: 700px');
    });

    it('applies the correct styling', () => {
        render(<Feedback />);
        const div = screen.getByText(/We value your feedback./i).closest('div');
        expect(div).toHaveStyle('padding: 20px');
        expect(div).toHaveStyle('fontFamily: Arial, sans-serif');
        expect(div).toHaveStyle('color: #fff');
    });
});