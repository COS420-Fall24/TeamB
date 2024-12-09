import React, { useState } from 'react';
import axios from 'axios';

const Variables: React.FC = () => {
    const [feedback, setFeedback] = useState<string | null>(null);
    // eslint-disable-next-line
    const [userInput, setUserInput] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    // Function to handle getting hints from the backend
    // eslint-disable-next-line
    const handleGetHints = async () => {
        if (!userInput.trim()) {
            setError('Please enter some text to get a hint.');
            return;
        }

        setIsLoading(true);
        setError(null); // Reset previous errors

        try {
            // Replace with your backend API URL if it's different
            const response = await axios.post('/api/feedback', {
                prompt: userInput, // Pass the user's input as prompt
            });
            setFeedback(response.data.feedback); // Set the feedback or hint received
        } catch (error) {
            console.error('Error getting feedback:', error);
            setError('Failed to get hint. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
            <h1>Understanding Variables in Python</h1>
            <p>
                In Python, a variable is a name that refers to a value. You can think of it as a container for storing data values.
            </p>
            <h2>How to Create Variables</h2>
            <p>To create a variable in Python, simply assign a value to a name using the equals sign:</p>
            <pre>
                <code>
                    {`my_variable = 10\nname = "John"\nprice = 19.99\nis_active = True`}
                </code>
            </pre>
            <h2>Example of Variable Usage</h2>
            <p>Here is an example of how you might use variables in Python:</p>
            <pre>
                <code>
                    {`# Example code\nname = "Alice"\nage = 30\nprint(f"My name is {name} and I am {age} years old.")`}
                </code>
            </pre>
            <h2>Try It Out</h2>
            <p>Use the embedded Python compiler below to test your code:</p>
            <iframe
                title="Python Compiler"
                src="https://trinket.io/embed/python/c602fdf514fe"
                style={{ width: '100%', height: '600px', border: 'none' }}
                frameBorder="0"
                allowFullScreen
            ></iframe>
    
            {/* Feedback and Error Messages */}
            {isLoading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {feedback && <p>Feedback: {feedback}</p>}
    
            <h2>Interactive Chat</h2>
            <p>Ask questions or interact with the chatbot below:</p>
            <iframe
                title="Chatbot"
                src="https://www.chatbase.co/chatbot-iframe/9YK6TrigVzwsAN6YqvxZO"
                width="100%"
                style={{ height: '100%', minHeight: '700px' }}
                frameBorder="0"
            ></iframe>
        </div>
    );
};

export default Variables;    
