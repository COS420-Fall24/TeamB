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
        setActiveTab('exercises');
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

    const handleNavigateToQuizzes = () => {
        navigate('/quizzes');
    };

    const [courseProgress, setCourseProgress] = useState<Record<number, number>>(
        Object.fromEntries(courses.map((course) => [course.id, 0]))
    );

    const updateCourseProgress = (courseId: number): void => {
        setCourseProgress((prev) => {
            const currentProgress = prev[courseId];
            if (currentProgress < 100) {
                
                const newProgress = Math.min(currentProgress + 20, 100);
                return { ...prev, [courseId]: newProgress };
            }
            return prev;
        });
    };
    

    const handleNavigateToInteractiveExercises = () => {
        navigate('/interactive-exercises'); // Navigate to Interactive Exercises page
    };

    const handleNavigateToDocs = () => {
        window.location.href ='/docs';
    }

    return (
        <div className="container">
            {/* Top Container with Logout Button and Dashboard */}
            <div className="top-container">
                {/* Logout Button */}
                <div className="logout-container">
                    <button onClick={handleNavigateToDocs}>Documentation</button>
                    <button onClick={props.onLogout} className="logout-button">Logout</button>
                </div>

                {/* Dashboard Section */}
                <div className="dashboard">
                    <h1>Welcome, {auth.currentUser?.email}</h1>
                    <h2>Your Dashboard</h2>
                    <div className="tabs">
                        <button className={`tablink ${activeTab === 'exercises' ? 'active' : ''}`} onClick={() => openTab('exercises')}>Interactive Exercises</button>
                        <button className={`tablink ${activeTab === 'progress' ? 'active' : ''}`} onClick={() => openTab('progress')}>Progress Tracking</button>
                        <button className={`tablink ${activeTab === 'quizzes' ? 'active' : ''}`} onClick={() => openTab('quizzes')}>Quizzes</button>
                        <button className={`tablink ${activeTab === 'feedback' ? 'active' : ''}`} onClick={() => openTab('feedback')}>Feedback</button>
                        <button className={`tablink ${activeTab === 'streaks' ? 'active' : ''}`} onClick={() => openTab('streaks')}>Streaks</button>
                    </div>
                </div>
            </div>

            {/* Tab Content */}
            <div id="exercises" className={`tabcontent ${activeTab === 'exercises' ? 'active' : ''}`}>
                <h2>Interactive Exercises</h2>
                <p>Complete the following exercises to sharpen your coding skills.</p>
                {/* Button to navigate to interactive exercises */}
                <button className="course-button" onClick={handleNavigateToInteractiveExercises}>Start Exercises</button>
            </div>

            <div id="progress" className={`tabcontent ${activeTab === 'progress' ? 'active' : ''}`}>
    <h2>Progress Tracking</h2>
    <ul className="progress-list">
        {courses.map((course) => (
            <li key={course.id} className="progress-item">
                <h3>{course.title}</h3>
                <p>Progress: {courseProgress[course.id]}%</p>
                <div className="progress-bar-container">
                    <div
                        className="progress-bar"
                        style={{ width: `${courseProgress[course.id]}%` }}
                    ></div>
                </div>
            </li>
        ))}
    </ul>
</div>

            <div id="quizzes" className={`tabcontent ${activeTab === 'quizzes' ? 'active' : ''}`}>
                <h2>Quizzes</h2>
                <p>Test your knowledge with these quizzes.</p>
                <button className="course-button" onClick={handleNavigateToQuizzes}>Start Quizzes</button>
            </div>

            <div id="feedback" className={`tabcontent ${activeTab === 'feedback' ? 'active' : ''}`}>
                <h2>Feedback</h2>
                <p>Get feedback on your coding progress and performance.</p>

                <h2>Interactive Chat</h2>
                <p>Ask questions or interact with the chatbot below:</p>
                <iframe
                    src="https://www.chatbase.co/chatbot-iframe/9YK6TrigVzwsAN6YqvxZO"
                    width="100%"
                    style={{ height: '100%', minHeight: '700px', border: 'none' }}
                    frameBorder="0"
                    title="Interactive Chatbot"
                ></iframe>
            </div>

            <div id="streaks" className={`tabcontent ${activeTab === 'streaks' ? 'active' : ''}`}>
                <h2>Streaks</h2>
                <p>Maintain your learning streak and earn rewards.</p>
            </div>

            {/* Course List Section */}
            <h2>Select a Course</h2>
            <ul className="course-list">
                {courses.map((course) => (
                    <li className="course-item" key={course.id}>
                        <h3>{course.title}</h3>
                        <p>{course.description}</p>
                        {course.id === 1 && (
                            <button className="course-button" onClick={handleEnrollNowVariables}>Enroll Now</button>
                        )}
                        {course.id === 2 && (
                            <button className="course-button" onClick={handleEnrollNowDataTypes}>Enroll Now</button>
                        )}

                        {course.id === 3 && (
                            <button className="course-button" onClick={handleEnrollNowLoops}>Enroll Now</button>
                        )}
                    </li>
                ))}
                {/* Add Quizzes Section */}
                <li className="course-item" key="quizzes">
                    <h3>Quizzes</h3>
                    <p>Test your knowledge on various programming topics.</p>
                    <button className="course-button" onClick={handleNavigateToQuizzes}>Explore Quizzes</button>
                </li>
            </ul>
        </div>
    );
};

export default LandingPage;
