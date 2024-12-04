import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { auth } from './firebaseConfig'; 
import './LandingPage.css';

interface LandingPageProps {
    onLogout: () => void; 
}

const LandingPage = (props: LandingPageProps): JSX.Element => {
    const [activeTab, setActiveTab] = useState<string>('exercises'); 
    const navigate = useNavigate(); 

    const openTab = (tabName: string): void => {
        setActiveTab(tabName);
    };

    const courses = [
        { id: 1, title: 'Variables', description: 'Learn how to store and manipulate data using variables.' },
        { id: 2, title: 'Data Types', description: 'Understand different data types like integers, floats, strings, and booleans.' },
        { id: 3, title: 'Loops', description: 'Explore loops (for, while).' },
        { id: 4, title: 'Control Structures', description: 'Explore conditional statements (if, elif, else) and loops (for, while).' },
        { id: 5, title: 'Functions', description: 'Learn how to create reusable blocks of code with functions.' },
        { id: 6, title: 'Lists and Tuples', description: 'Discover how to store collections of data using lists and tuples.' },
        { id: 7, title: 'Dictionaries', description: 'Understand how to use dictionaries for key-value pairs and data storage.' },
        { id: 8, title: 'Basic Input/Output', description: 'Learn how to take user input and display output using print and input functions.' },
    ];

    useEffect(() => {
        setActiveTab('dashboard');
    }, []);

    const handleEnrollNowVariables = () => {
        navigate('/variables'); 
    };

    const handleEnrollNowDataTypes = () => {
        navigate('/data-types');
    };

    const handleEnrollNowLoops = () => {
        navigate('/loops');
    };

    return (
        <div className="container">
            {/* Top Container with Logout Button and Dashboard */}
            <div className="top-container">
                {/* Logout Button */}
                <div className="logout-container">
                    <button onClick={props.onLogout} className="logout-button">Logout</button>
                </div>
            </div>
           

            <h2>Your Dashboard</h2>
            <div className="tabs">
                <button className={`tablink ${activeTab === 'exercises' ? 'active' : ''}`} onClick={() => openTab('exercises')}>Interactive Exercises</button>
                <button className={`tablink ${activeTab === 'progress' ? 'active' : ''}`} onClick={() => openTab('progress')}>Progress Tracking</button>
                <button className={`tablink ${activeTab === 'quizzes' ? 'active' : ''}`} onClick={() => openTab('quizzes')}>Quizzes</button>
                <button className={`tablink ${activeTab === 'feedback' ? 'active' : ''}`} onClick={() => openTab('feedback')}>Feedback</button>
                <button className={`tablink ${activeTab === 'recommendations' ? 'active' : ''}`} onClick={() => openTab('recommendations')}>Course Recommendations</button>
                <button className={`tablink ${activeTab === 'streaks' ? 'active' : ''}`} onClick={() => openTab('streaks')}>Streaks</button>
            </div>

            {/* Tab Content */}

            <div id="exercises" className={`tabcontent ${activeTab === 'exercises' ? 'active' : ''}`}>
                <h2>Interactive Exercises</h2>
                <p>Complete the following exercises to sharpen your coding skills.</p>
                <button className={`tablink ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => openTab('dashboard')}>Return to dashboard</button>
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

            <div id="progress" className={`tabcontent ${activeTab === 'progress' ? 'active' : ''}`}>
                <h2>Progress Tracking</h2>
                <p>Track your progress through quizzes and exercises.</p>
                <button className={`tablink ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => openTab('dashboard')}>Return to dashboard</button>
                {/* Add progress tracking content here */}
            </div>

            <div id="quizzes" className={`tabcontent ${activeTab === 'quizzes' ? 'active' : ''}`}>
                <h2>Quizzes</h2>
                <p>Test your knowledge with these quizzes.</p>
                <button className={`tablink ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => openTab('dashboard')}>Return to dashboard</button>
                {/* Add quiz content here */}
            </div>

            <div id="feedback" className={`tabcontent ${activeTab === 'feedback' ? 'active' : ''}`}>
                <h2>Feedback</h2>
                <p>Get feedback on your coding progress and performance.</p>
                <button className={`tablink ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => openTab('dashboard')}>Return to dashboard</button>
                {/* Add feedback content here */}
            </div>

            <div id="recommendations" className={`tabcontent ${activeTab === 'recommendations' ? 'active' : ''}`}>
                <h2>Course Recommendations</h2>
                <p>Discover new topics based on what you have already learned</p> 
                <button className={`tablink ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => openTab('dashboard')}>Return to dashboard</button>
                <ul className="recommended-courses">
                    <p>We recommend to take these courses in this order</p>
                    <li className="course-item">1. Variables</li>
                    <li className="course-item">2. Data Types</li>
                    <li className="course-item">3. Basic input/output</li>
                    <li className="course-item">4. Control Structures</li>
                    <li className="course-item">5. Functions</li>
                    <li className="course-item">6. Lists and Tuples</li>
                    <li className="course-item">7. Dictionarys</li> 
                </ul>
                    {/*TODO find a way to remove course from list if already done*/}
            </div>

            <div id="streaks" className={`tabcontent ${activeTab === 'streaks' ? 'active' : ''}`}>
                <h2>Streaks</h2>
                <p>Streak: <span className= "streak-number">5</span></p>
                <p>Longest Streak: <span className= "longest-streak-number">20</span></p>
            </div>
        </div>
    );
}

export default LandingPage;
