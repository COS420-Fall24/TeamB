// src/components/LandingPage.tsx

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { auth } from './firebaseConfig'; // Ensure this points to your firebase configuration
import './LandingPage.css';

interface LandingPageProps {
    onLogout: () => void; // Prop to handle logout
}

const LandingPage = (props: LandingPageProps): JSX.Element => {
    const [activeTab, setActiveTab] = useState<string>('exercises'); // State to track the active tab
    const navigate = useNavigate(); // Hook for navigation

    // Function to handle tab switching
    const openTab = (tabName: string): void => {
        setActiveTab(tabName);
    };

    const courses = [
        { id: 1, title: 'Variables', description: 'Learn how to store and manipulate data using variables.' },
        { id: 2, title: 'Data Types', description: 'Understand different data types like integers, floats, strings, and booleans.' },
        { id: 3, title: 'Control Structures', description: 'Explore conditional statements (if, elif, else) and loops (for, while).' },
        { id: 4, title: 'Functions', description: 'Learn how to create reusable blocks of code with functions.' },
        { id: 5, title: 'Lists and Tuples', description: 'Discover how to store collections of data using lists and tuples.' },
        { id: 6, title: 'Dictionaries', description: 'Understand how to use dictionaries for key-value pairs and data storage.' },
        { id: 7, title: 'Basic Input/Output', description: 'Learn how to take user input and display output using print and input functions.' },
    ];

    useEffect(() => {
        // Show the first tab by default
        setActiveTab('exercises');
    }, []);

    const handleEnrollNowVariables = () => {
        navigate('/variables'); // Navigate to the Variables page
    };

    const handleEnrollNowDataTypes = () => {
        navigate('/data-types'); // Navigate to the Data Types page
    };

    const handleEditAccount = () => {
        navigate('/edit-account'); // Navigate to the Edit Account page
    };

    return (
        
        <div className="container">
            
            <h1>Welcome, {auth.currentUser?.email}</h1>

            <div className="account-buttons">
                <button onClick={handleEditAccount} className="account-button">Edit Account</button>
                <button onClick={props.onLogout} className="account-button">Logout</button>
            </div>
            
            <h2>Your Dashboard</h2>
            <div className="tabs">
                <button className={`tablink ${activeTab === 'exercises' ? 'active' : ''}`} onClick={() => openTab('exercises')}>Interactive Exercises</button>
                <button className={`tablink ${activeTab === 'progress' ? 'active' : ''}`} onClick={() => openTab('progress')}>Progress Tracking</button>
                <button className={`tablink ${activeTab === 'quizzes' ? 'active' : ''}`} onClick={() => openTab('quizzes')}>Quizzes</button>
                <button className={`tablink ${activeTab === 'feedback' ? 'active' : ''}`} onClick={() => openTab('feedback')}>Feedback</button>
                <button className={`tablink ${activeTab === 'streaks' ? 'active' : ''}`} onClick={() => openTab('streaks')}>Streaks</button>
            </div>

            {/* Tab Content */}
            <div id="exercises" className={`tabcontent ${activeTab === 'exercises' ? 'active' : ''}`}>
                <h2>Interactive Exercises</h2>
                <p>Complete the following exercises to sharpen your coding skills.</p>
                {/* Add interactive exercises content here */}
            </div>

            <div id="progress" className={`tabcontent ${activeTab === 'progress' ? 'active' : ''}`}>
                <h2>Progress Tracking</h2>
                <p>Track your progress through quizzes and exercises.</p>
                {/* Add progress tracking content here */}
            </div>

            <div id="quizzes" className={`tabcontent ${activeTab === 'quizzes' ? 'active' : ''}`}>
                <h2>Quizzes</h2>
                <p>Test your knowledge with these quizzes.</p>
                {/* Add quiz content here */}
            </div>

            <div id="feedback" className={`tabcontent ${activeTab === 'feedback' ? 'active' : ''}`}>
                <h2>Feedback</h2>
                <p>Get feedback on your coding progress and performance.</p>
                {/* Add feedback content here */}
            </div>

            <div id="streaks" className={`tabcontent ${activeTab === 'streaks' ? 'active' : ''}`}>
                <h2>Streaks</h2>
                <p>Maintain your learning streak and earn rewards.</p>
                {/* Add streaks content here */}
            </div>

            <h2>Select a Course</h2>
            <ul className="course-list">
                {courses.map((course) => (
                    <li className="course-item" key={course.id}>
                        <h3>{course.title}</h3>
                        <p>{course.description}</p>
                        {course.id === 1 && ( // Add the "Enroll Now" button for the Variables course
                            <button className="course-button" onClick={handleEnrollNowVariables}>Enroll Now</button>
                        )}
                        {course.id === 2 && ( // Add the "Enroll Now" button for the Data Types course
                            <button className="course-button" onClick={handleEnrollNowDataTypes}>Enroll Now</button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LandingPage;
